import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/gameResults/history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResults(res.data);
      } catch (err) {
        setError('Failed to fetch history');
      }
    };

    fetchHistory();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Game History</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Mode: {result.mode} | Score: {result.score} | Time: {result.time}s | Date: {new Date(result.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;

