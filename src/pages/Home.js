import React from 'react';
import { Paper } from '@mui/material';
import HomeBackground from '../images/home-background.JPG';

const Home = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${HomeBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
    },
  };

  return <Paper style={styles.paperContainer}></Paper>;
};

export default Home;
