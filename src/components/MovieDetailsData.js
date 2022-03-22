import { Container, Typography, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
const MovieDetailsData = ({ movie }) => {
  const releaseDate = moment(movie.release_date).format('Do MMM YYYY');

  return (
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
  );
};

export default MovieDetailsData;
