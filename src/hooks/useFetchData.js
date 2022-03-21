import { useEffect, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

const useFetchData = (pageType) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const API_KEY = '0e7274f05c36db12cbe71d9ab0393d47'; //Should be present in env variable but for simplicity I am hardcoding it here
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMovies);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies(pageNo = 1) {
    const response = await fetch(
      `${BASE_URL}/${pageType}?page=${pageNo}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return [movies, isFetching];
};

export default useFetchData;
