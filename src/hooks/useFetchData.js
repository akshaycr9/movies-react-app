import { useEffect, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

const useFetchData = (pageType, query) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const SEARCH_BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = '0e7274f05c36db12cbe71d9ab0393d47'; //Should be present in env variable but for simplicity I am hardcoding it here
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(
    pageType === 'search' ? searchMovie : getMovies
  );

  useEffect(() => {
    if (pageType === 'search') {
      setMovies([]);
      searchMovie();
    } else {
      getMovies();
    }
  }, [query]);

  async function getMovies(pageNo = 1) {
    const response = await fetch(
      `${BASE_URL}/${pageType}?page=${pageNo}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  async function searchMovie(pageNo = 1) {
    const response = await fetch(
      `${SEARCH_BASE_URL}?query=${query}&page=${pageNo}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return [movies, isFetching];
};

export default useFetchData;
