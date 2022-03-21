import { useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';

const App = () => {
  const [genres, setGenres] = useState([]);

  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
  }

  useEffect(() => {
    getGenres();
  }, []);

  async function getGenres() {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=0e7274f05c36db12cbe71d9ab0393d47'
    );
    const data = await response.json();
    setGenres(data.genres);
  }

  return (
    <>
      <AppRoutes genres={genres} />
    </>
  );
};

export default App;
