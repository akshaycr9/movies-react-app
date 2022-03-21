import Container from '@mui/material/Container';
import MoviesList from '../components/MoviesList';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';

const NowPlaying = ({ genres }) => {
  const [movies, isFetching] = useFetchData('now_playing');

  return (
    <Container maxWidth="xl">
      <MoviesList movies={movies} isFetching={isFetching} genres={genres} />
      {isFetching && <Loader />}
    </Container>
  );
};

export default NowPlaying;
