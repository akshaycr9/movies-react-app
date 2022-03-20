import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import RecommendIcon from '@mui/icons-material/Recommend';
import NoImage from '../images/no-image-available.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Movie = ({ movie, genres }) => {
  function getGenres() {
    if (movie.genre_ids.length > 0) {
      return genres.filter((genre) => movie.genre_ids.includes(genre.id));
    } else {
      return [];
    }
  }
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : NoImage;
  const releaseDate = moment(movie.release_date).format('Do MMM YYYY');
  return (
    <Link to={`/movie/${movie.id}`} className="link">
      <Card style={{ width: 300, margin: 20 }}>
        <CardActionArea>
          <CardMedia style={{ height: 400 }} image={image} />
          <CardContent>
            <Typography variant="headline" component="h2">
              {movie.title}
            </Typography>
            <Typography color="textSecondary">
              Release Date: {releaseDate}
            </Typography>
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
            <br />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="string" component={'div'}>
                <StarIcon />
                <span>{movie.vote_average}</span>
              </Typography>
              <Typography variant="string" component={'div'}>
                <RecommendIcon />
                <span>{movie.vote_count}</span>
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Movie;
