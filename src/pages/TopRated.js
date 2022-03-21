import MoviesList from '../components/MoviesList';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../hooks/useFetchData';
const TopRated = ({ genres }) => {
  const [movies, isFetching] = useFetchData('top_rated');

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

export default TopRated;
