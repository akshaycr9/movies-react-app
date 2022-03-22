import { useEffect, useState } from 'react';

const useFavorite = (id) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIfFavorite(id);
  }, [id]);
  const checkIfFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      setIsFavorite(favorites.find((movie) => movie.id === parseInt(id)));
    }
  };

  const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(true);
  };

  return [isFavorite, addToFavorites];
};

export default useFavorite;
