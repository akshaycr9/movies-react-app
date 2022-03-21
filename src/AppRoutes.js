import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';

import Navbar from './components/Navbar';

const AppRoutes = ({ genres }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated genres={genres} />} />
        <Route path="/upcoming" element={<Upcoming genres={genres} />} />
        <Route path="/popular" element={<Popular genres={genres} />} />
        <Route path="/now-playing" element={<NowPlaying genres={genres} />} />
        <Route path="/search/:query" element={<Search genres={genres} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites genres={genres} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
