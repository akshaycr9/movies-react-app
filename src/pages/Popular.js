import { Container } from '@mui/material';
import MoviesList from '../components/MoviesList';
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';

const Popular = ({ genres }) => {
  const [movies, isFetching] = useFetchData('popular');

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} genres={genres} />
      {isFetching && <Loader />}
    </Container>
  );
};

export default Popular;
