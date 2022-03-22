import { useEffect, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';
import { API_BASE_URL, API_KEY, API_SEARCH_URL } from '../AppVariables';

const useFetchData = (pageType, query) => {
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
      `${API_BASE_URL}/${pageType}?page=${pageNo}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  async function searchMovie(pageNo = 1) {
    const response = await fetch(
      `${API_SEARCH_URL}?query=${query}&page=${pageNo}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies((prevState) => [...prevState, ...data.results]);
    setIsFetching(false);
  }

  return [movies, isFetching];
};

export default useFetchData;
