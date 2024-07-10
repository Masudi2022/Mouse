import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Style.css';

const Header = ({ onMenuClick }) => {
  return (
    <div className='nav-container'>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mouse City
          </Typography>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>About</Link>
          <Link to="/squad" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Squad</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
          <Link to="/community" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Community</Link>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Shop</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
