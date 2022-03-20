import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NoImage from '../images/no-image-available.png';

const MovieDetailsImageCard = ({ movie }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : NoImage;

  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{ height: 500 }} image={image} />
        <CardActions>
          <Button
            fullWidth={true}
            variant="text"
            endIcon={<FavoriteBorderIcon />}
          >
            ADD TO FAVORITES
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieDetailsImageCard;
