import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import MoviesList from '../components/MoviesList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Search = ({ genres }) => {
  let { query } = useParams();

  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(searchMovie);

  useEffect(() => {
    setMovies([]);
    searchMovie();
  }, [query]);

  async function searchMovie(pageNo = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNo}&api_key=0e7274f05c36db12cbe71d9ab0393d47`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        component="h3"
        style={{ margin: 20, color: 'white' }}
      >
        Search Results for: {query}
      </Typography>
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
      {isFetching && (
        <span className="loader">
          <CircularProgress size={60} />
        </span>
      )}
    </Container>
  );
};

export default Search;
