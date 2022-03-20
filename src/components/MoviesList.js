import React from 'react';
import Grid from '@mui/material/Grid';
import Movie from './Movie';
import LinearProgress from '@mui/material/LinearProgress';

const MoviesList = ({ movies, isFetching, genres }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item xs={8} sm={6} md={3}>
          <Movie key={index} movie={movie} genres={genres} />
        </Grid>
      ))}
      {isFetching && <LinearProgress />}
    </Grid>
  );
};

export default MoviesList;
