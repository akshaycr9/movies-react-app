import React from 'react';
import Grid from '@mui/material/Grid';

const MoviesList = ({ movies, isFetching }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={6} md={3}>
          <h2>{movie.title}</h2>
        </Grid>
      ))}
      {isFetching && 'Fetching more items...'}
    </Grid>
  );
};

export default MoviesList;
