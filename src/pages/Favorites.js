import React from 'react';
import { Container, Grid } from '@mui/material';
import Movie from '../components/Movie';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {favorites.map((movie, index) => (
          <Grid item xs={8} sm={6} md={4}>
            <Movie key={index} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favorites;
