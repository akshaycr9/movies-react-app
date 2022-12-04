import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography,
} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NoImage from '../images/no-image-available.png';

const MovieDetailsImageCard = ({ movie, addToFavorites, isFavorite }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : NoImage;

  return (
    <Card>
      <CardActionArea
        disabled={isFavorite}
        onClick={() => addToFavorites(movie)}
      >
        <CardMedia style={{ height: 500 }} image={image} />
        <CardActions>
          <div className="favorite-area">
            <Typography variant="p">
              {isFavorite ? 'ADDED TO FAVORITES' : 'ADD TO FAVORITES'}
            </Typography>
            <FavoriteBorderIcon />
          </div>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieDetailsImageCard;
