import React from 'react';
import Grid from '@mui/material/Grid';
import Movie from './Movie';

const MoviesList = ({ movies, genres }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid key={index} item xs={8} sm={6} md={4}>
          <Movie key={index} movie={movie} genres={genres} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
