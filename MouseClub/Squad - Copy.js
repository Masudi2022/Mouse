import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SquadList from './squadList';
import DrawerMenu from './DrawerMenu';
import './page.css';

const Squad = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  return (
    <div className='squadbody'>
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
      <div className='menu'>
      
      </div>
      <div>
        <SquadList />
      </div>
      
    </div>
   


    // {/* <div className='main-container'>
      
    // <h1>Squad </h1>
      
    // </div>
    // */}

);
}

export default Squad;
