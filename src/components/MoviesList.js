import React from 'react';
import Grid from '@mui/material/Grid';
import Movie from './Movie';
import CircularProgress from '@mui/material/CircularProgress';

const MoviesList = ({ movies, isFetching, genres }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid key={index} item xs={8} sm={6} md={4}>
          <Movie key={index} movie={movie} genres={genres} />
        </Grid>
      ))}
      {/* {true && <CircularProgress size={60} />} */}
    </Grid>
  );
};

export default MoviesList;
