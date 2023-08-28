// src/routes/Matches.jsx
import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  // 假设从API获取匹配数据
  useEffect(() => {
    const fetchData = async () => {
      // 这里通常会有API调用来获取匹配数据
      const mockData = [
        { id: 1, name: 'Alice', age: 25, location: 'New York', avatar: 'alice.jpg' },
        { id: 2, name: 'Bob', age: 30, location: 'San Francisco', avatar: 'bob.jpg' },
        // ...更多匹配数据
      ];
      setMatches(mockData);
    };
    fetchData();
  }, []);

  return (
    <div className="matches-page">
      <h1>Your Matches</h1>
      <div className="match-list">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
