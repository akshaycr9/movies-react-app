import Container from '@mui/material/Container';
import MoviesList from '../components/MoviesList';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../hooks/useFetchData';

const NowPlaying = ({ genres }) => {
  const [movies, isFetching] = useFetchData('now_playing');

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
      {isFetching && (
        <span className="loader">
          <CircularProgress size={60} />
        </span>
      )}
    </Container>
  );
};

export default NowPlaying;
