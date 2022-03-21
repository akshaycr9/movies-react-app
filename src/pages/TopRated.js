import MoviesList from '../components/MoviesList';
import Container from '@mui/material/Container';
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';
const TopRated = ({ genres }) => {
  const [movies, isFetching] = useFetchData('top_rated');

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} genres={genres} />
      {isFetching && <Loader />}
    </Container>
  );
};

export default TopRated;
