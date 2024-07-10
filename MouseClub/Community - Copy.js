import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerMenu from './DrawerMenu';
import Header from './Header';
import './Community.css';

function Community() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  return (
    <div>
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
      <div className='main-community'>
        <h1>Welcome to Mouse Community</h1><br />
        <h3>Join with Mouse To communicate with others</h3>
        <button className='com-btn'>
          <Link to="/community/register">Register</Link>
        </button>
        <button className='com-btn'>
          <Link to="/community/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Community;
