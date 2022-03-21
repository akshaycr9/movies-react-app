import MoviesList from '../components/MoviesList';
import Container from '@mui/material/Container';
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';

const Upcoming = ({ genres }) => {
  const [movies, isFetching] = useFetchData('upcoming');

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
      {isFetching && <Loader />}
    </Container>
  );
};

export default Upcoming;
