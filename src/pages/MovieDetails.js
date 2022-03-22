import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import MovieDetailsImageCard from '../components/MovieDetailsImageCard';
import MovieDetailsData from '../components/MovieDetailsData';
import useFavorite from '../hooks/useFavorite';
import { API_BASE_URL, API_KEY } from '../AppVariables';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isFavorite, addToFavorites] = useFavorite(id);

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  async function getMovieDetails(id) {
    const response = await fetch(`${API_BASE_URL}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    setMovie(data);
  }

  return (
    <Container
      style={{
        background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        height: '100vh',
        width: '100vw',
        marginTop: 15,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      maxWidth={'xl'}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <MovieDetailsImageCard
              movie={movie}
              addToFavorites={addToFavorites}
              isFavorite={isFavorite}
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <MovieDetailsData movie={movie} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MovieDetails;
