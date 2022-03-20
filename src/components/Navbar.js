import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Logo from '../images/movie-logo.png';

import SearchBar from './SearchBar';

const pages = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/" className="link">
              <Box
                component="img"
                sx={{
                  height: 60,
                  width: 60,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="Logo"
                src={Logo}
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  to={`/${page.toLowerCase().split(' ').join('-')}`}
                  className="link"
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
