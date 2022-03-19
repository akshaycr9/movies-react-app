import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import MoviesList from '../components/MoviesList';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const NowPlaying = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMovies);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies(pageNo = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${pageNo}&api_key=0e7274f05c36db12cbe71d9ab0393d47`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
    </Container>
  );
};

export default NowPlaying;
