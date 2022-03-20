import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
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
      <Card style={{ margin: 20 }}>
        <CardActionArea>
          <CardMedia style={{ height: 500 }} image={image} />
          <CardContent style={{ backgroundColor: 'floralwhite' }}>
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
              <Typography variant="p">
                <div className="spacing">
                  <span style={{ fontWeight: 'bold', fontSize: 20 }}>
                    {movie.vote_average}{' '}
                  </span>
                  <StarOutlinedIcon className="star-icon" />{' '}
                </div>
              </Typography>
              <Typography variant="p">
                <div className="spacing">
                  <span style={{ fontWeight: 'bold', fontSize: 20 }}>
                    {movie.vote_count}
                  </span>
                  <RecommendIcon />{' '}
                </div>
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Movie;
