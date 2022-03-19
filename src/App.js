import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import Home from './pages/Home';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/now-playing" element={<NowPlaying />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
