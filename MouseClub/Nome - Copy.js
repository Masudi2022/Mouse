import React, { useState } from 'react';
import ImageSlideshow from './ImageSlideshow';
import Standing from './Standing';
import DrawerMenu from './DrawerMenu';
import Header from './Header';
import News from './News';
import Fixture from './Fixture';
import Footer from './Footer';

import './Style.css';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  return (
    <div className='main-container'>
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
      <div className='home-container'>
        <div className='home-content'>
          <div className='App'>
            <h2>Home</h2>
            <ImageSlideshow />
          </div>
          <div className='News'>
            <News />
          </div>
        </div>
        
        

        <div className='right-side'>
          <div className='Stand'>
            <Standing />
          </div>
          <div className='Stand'>
            <Fixture />
          </div>
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
