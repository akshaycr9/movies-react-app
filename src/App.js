import AppRoutes from './AppRoutes';
import useFetchGenres from './hooks/useFetchGenres';

const App = () => {

  const {genres} = useFetchGenres()

  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
  }

  return (
    <>
      <AppRoutes genres={genres} />
    </>
  );
};

export default App;
