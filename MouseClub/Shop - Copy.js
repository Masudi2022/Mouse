import React, { useState } from 'react';
import Header from './Header';
import DrawerMenu from './DrawerMenu';
import jersey from '../assets/images/jersey.jpeg';
import jersey2 from '../assets/images/jersey2.jpeg';
import jerseyy from '../assets/images/jerseyy.jpeg';
import './Style.css';

const Shop = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (state) => () => {
      setDrawerOpen(state);
    };

    return (
        <div className='main'>
            <Header onMenuClick={toggleDrawer(true)} />
            <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
            <div>
            <h1>Welcome to Mouse shopp</h1>
            </div>

            <div class>
            
                <div className='jersey-box'>
                    <img id='jersey1' src={jersey} alt="home kit" />
                    <hr/>
                    <p>Sale: Tzs 70,000</p>
                </div>
                <div className='jersey-box'>
                    <img id='jersey2' src={jersey2} alt="home kit" />
                    <hr/>
                    <p>Sale: Tzs 70,000</p>
                </div>
                <div className='jersey-box'>
                    <img id='jersey3' src={jerseyy} alt="home kit" />
                    <hr/>
                    <p id='price'>Sale: Tzs 70,000</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default Shop;