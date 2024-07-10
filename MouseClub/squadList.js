// src/components/SquadList.js
import React, { useEffect, useState } from 'react';
import DrawerMenu from './DrawerMenu';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SquadList = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };
  const [squad, setSquad] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/api/squad/')
      .then(response => {
        setSquad(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the squads!', error);
      });
  }, []);

  return (
    <div className='pp'>
        {squad.map(player => (
          <div className='player' key={player.id}>
              <Link to={`/squad/${player.id}`}>
                <p>{player.firstname}</p>
              </Link>
              <p>{player.lastname}</p>
              <p>{player.position}</p>
          </div>
        ))}
    </div>
  );
};

export default SquadList;
