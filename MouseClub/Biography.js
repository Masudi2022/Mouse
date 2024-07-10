import React, { useState, useEffect } from 'react';
import DrawerMenu from './DrawerMenu';
import Header from './Header';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import images from '../assets/images/images.jpeg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Style.css';

const Biography = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/squad/${id}/`);
        setStaff(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStaff();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Prepare data for the chart
  const data = [
    { name: 'Skills', value: staff.skills },
    { name: 'Shoots', value: staff.shoot },
    { name: 'Dribbling', value: staff.dribbling },
    { name: 'Defending', value: staff.defending }
  ];

  return (
    <div>
      <Header onMenuClick={toggleDrawer(true)} />
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
      
      <div className='bio-container'>
        <div className="container">
          <img src={images} alt="player" />
          <h3>{staff.firstname} {staff.lastname}</h3>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{staff.firstname} {staff.lastname}</td>
              </tr>
              <tr>
                <th>Nationality</th>
                <td>{staff.nationality}</td>
              </tr>
              <tr>
                <th>Value</th>
                <td>{staff.value}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{staff.age}</td>
              </tr>
            
         
            </tbody>
          </table>
          <br />
        </div>

        <div className='bioChart'>
          <h2 className='play-stat'>{staff.lastname}'s Statistics</h2>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      <br />
      <Link to="/squad">Back to Squad</Link>
    </div>
  );
};

export default Biography;
