import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import Home from './pages/Home';
import Search from './pages/Search';

import Navbar from './components/Navbar';

const App = () => {
  const [genres, setGenres] = useState([]);

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
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated genres={genres} />} />
          <Route path="/upcoming" element={<Upcoming genres={genres} />} />
          <Route path="/popular" element={<Popular genres={genres} />} />
          <Route path="/now-playing" element={<NowPlaying genres={genres} />} />
          <Route path="/search/:query" element={<Search genres={genres} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
