import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import MoviesList from '../components/MoviesList';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import CircularProgress from '@mui/material/CircularProgress';

const Popular = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMovies);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies(pageNo = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${pageNo}&api_key=0e7274f05c36db12cbe71d9ab0393d47`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
      {isFetching && (
        <span className="loader">
          <CircularProgress size={60} />
        </span>
      )}
    </Container>
  );
};

export default Popular;
