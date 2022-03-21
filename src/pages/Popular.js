import { Container } from '@mui/material';
import MoviesList from '../components/MoviesList';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../hooks/useFetchData';

const Popular = ({ genres }) => {
  const [movies, isFetching] = useFetchData('popular');

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

export default Popular;
