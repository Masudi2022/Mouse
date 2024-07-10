import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css'; // Import CSS file for styles

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:8000/api/news/') // URL of your Django REST API endpoint
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching News', error);
      });
  }, []);

  return (
    <div className='news-container'>
      <h1 className='news-header'>What News</h1>
        {news.map(news => (
          <div className="news-box">
            <h3>{news.title}</h3>
            <p>{news.body}</p>
          </div>
            
        ))}
    </div>
  );
};

export default News;
