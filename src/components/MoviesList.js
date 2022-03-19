import React from 'react';

const MoviesList = ({ movies, isFetching }) => {
  return (
    <>
      <ul className="list-group mb-2">
        {movies.map((movie) => (
          <li className="list-group-item">{movie.title}</li>
        ))}
      </ul>
      {isFetching && 'Fetching more items...'}
    </>
  );
};

export default MoviesList;
