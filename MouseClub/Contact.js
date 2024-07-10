import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import DrawerMenu from './DrawerMenu';
import './page.css';
// import Community from './Community';

const Contact = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  return (
      <div >
      <div className='main-container'>
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
          <h1>Contact</h1> 
          <p>Contact ith us Via</p>
              <p>WhatsApp: +255 673745250</p>
              <p>Instagram Mouse@2277</p>
              <p>Twitter: Mouse@2277</p>
              <p>Gmail:Mouse@gmail.com</p>
          </div>
        <div>
        
        </div>
      
    
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
