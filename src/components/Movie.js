import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Movie = ({ movie, genres }) => {
  function getGenres() {
    if (movie.genre_ids.length > 0) {
      return genres.filter((genre) => movie.genre_ids.includes(genre.id));
    }
  }

  return (
    <Card style={{ width: 300, margin: 20 }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 400 }}
          image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography color="textSecondary">{movie.release_date}</Typography>
          <Typography variant="subtitle2" component="div">
            {getGenres().map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                size="small"
                style={{ margin: 4 }}
              />
            ))}
          </Typography>
          <Typography component="p">
            {movie.vote_average} {movie.vote_count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;
