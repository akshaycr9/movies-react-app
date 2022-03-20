import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Chip } from '@mui/material';
import MovieDetailsImageCard from '../components/MovieDetailsImageCard';
import moment from 'moment';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MovieDetails = ({ genres }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log('movie =======', movie);

  useEffect(() => {
    getMovieDetails(id);
  }, []);

  async function getMovieDetails(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0e7274f05c36db12cbe71d9ab0393d47`
    );
    const data = await response.json();
    setMovie(data);
  }

  const releaseDate = moment(movie.release_date).format('Do MMM YYYY');

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
            <MovieDetailsImageCard movie={movie} />
          </Grid>
          <Grid item xs={6} md={8}>
            <Container component={'div'} className="movie-details">
              <Typography variant="h3">{movie.title}</Typography>
              <span style={{ fontStyle: 'italic' }}>{movie?.tagline}</span>
              <Typography variant="subtitle2" component="div">
                Genres:
                {movie?.genres?.map((genre) => (
                  <Chip
                    key={genre.id}
                    label={genre.name}
                    size="small"
                    style={{ margin: 4 }}
                  />
                ))}
              </Typography>
              <div className="spacing">
                <CalendarMonthIcon /> {releaseDate}
              </div>
              <Typography variant="p">{movie.overview}</Typography>
              <Typography variant="subtitle2" component="div">
                Available in:
                {movie?.spoken_languages?.map((language) => (
                  <Chip
                    key={language.iso_639_1}
                    label={language.english_name}
                    size="small"
                    style={{ margin: 4 }}
                  />
                ))}
              </Typography>
              <Typography variant="p">
                <div className="spacing">
                  Rating: {movie.vote_average}{' '}
                  <StarIcon className="star-icon icon-spacing" />{' '}
                </div>
              </Typography>
              <Typography variant="p">
                <div className="spacing">
                  Votes: {movie.vote_count}
                  <ThumbUpIcon className="icon-spacing" />{' '}
                </div>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MovieDetails;
