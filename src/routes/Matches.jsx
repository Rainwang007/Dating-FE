import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import { getMatches, likeUser, dislikeUser } from '../api';  // Import from the centralized API file

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const fetchedMatches = await getMatches();
        setMatches(fetchedMatches);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMatches();
  }, []);

  const handleLike = async (userId) => {
    try {
      const message = await likeUser(userId);
      console.log(message);  // Output success message
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDislike = async (userId) => {
    try {
      const message = await dislikeUser(userId);
      console.log(message);  // Output success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="matches-container">
      <h1>Matches</h1>
      {error && <p className="error">{error}</p>}
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} onLike={handleLike} onDislike={handleDislike} />
      ))}
    </div>
  );
};

export default Matches;
