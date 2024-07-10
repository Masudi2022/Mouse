import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import './DrawerMenu.css';

const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="drawer-container" onClick={onClose}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/squad">
            <ListItemText primary="Squad" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/community">
            <ListItemText primary="Community" />
          </ListItem>
          <ListItem button component={Link} to="/shop">
            <ListItemText primary="Shop" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
