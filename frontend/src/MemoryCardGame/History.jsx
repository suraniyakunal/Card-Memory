import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getModeColor = (mode) => {
  switch (mode?.toLowerCase()) {
    case 'easy': return '#00ffaa';
    case 'medium': return '#ffaa00';
    case 'hard': return '#ff0044';
    default: return '#888';
  }
};

const History = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/history', {
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
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', overflowY: 'auto', height: '100vh' }}>
      <h2 style={{ fontSize: '28px', color: '#00ffaa', marginBottom: '20px' }}>🕹️ Game History</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

      {results.length === 0 ? (
        <p style={{ color: '#aaa' }}>No game results yet.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {results.map((result, index) => (
            <div key={index} style={{
              backgroundColor: '#1e1e1e',
              borderLeft: `6px solid ${getModeColor(result.mode)}`,
              padding: '16px 20px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 255, 150, 0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}>
              <h3 style={{
                color: getModeColor(result.mode),
                marginBottom: '10px',
                textTransform: 'capitalize'
              }}>
                {result.mode} Mode
              </h3>
              <p>🎯 <strong>Score:</strong> {result.score}</p>
              <p>⏱ <strong>Time:</strong> {result.time}s</p>
              <p>📅 <strong>Date:</strong> {new Date(result.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;

