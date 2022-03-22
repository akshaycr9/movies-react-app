import { useParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loader from '../components/Loader';
import useFetchData from '../hooks/useFetchData';

const Search = ({ genres }) => {
  let { query } = useParams();

  const [movies, isFetching] = useFetchData('search', query);

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        component="h3"
        style={{ margin: 20, color: 'white' }}
      >
        Search Results for: {query}
      </Typography>
      <MoviesList movies={movies} genres={genres} />
      {isFetching && <Loader />}
    </Container>
  );
};

export default Search;
