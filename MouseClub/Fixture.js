import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';


const Fixture = () => {
  const [fixture, setfixture] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/fixture/')
      .then(response => {
        setfixture(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching Fixture', error);
      });
  }, []);

  return (
    <div >
      
      <div className='fixture-container'>
            <h1 className='fixture-font'>Fixtures</h1>
            {fixture.map(fixture => (
                <div className='fixture-box'>
                    
                    <small>{fixture.date}</small>
                    <p>{fixture.home_team.name} VS {fixture.away_team.name}</p>
                    <small>{fixture.time}:{fixture.venue}</small>
                    <hr/>
                </div>
          
        ))}
    
      </div>
    
        
    </div>
  );
};

export default Fixture;
