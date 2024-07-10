import React, { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';
import Header from './Header';
import './Footer';
import './page.css';

const About = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };
  return (
    <div >
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
      <div className='main-container'>
      <h1>About Mouse</h1> 
      <p>Mouse is the Football Club that Compete in the Stardard Chatered Premier Legue </p>
      <p>it established since 1987 as Mickey but in 1990 changed up to Mouse City Foot ball Club </p>
      <p>MouSe City have already achieve more trophies as follow</p>
      <pre>
        <p>5 Uefa Champion League</p>
        <p>4 Club World Cup tounament</p>
      </pre>
      <p></p>
      </div>
      

      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default About;
