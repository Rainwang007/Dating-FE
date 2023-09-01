import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { likeUser, dislikeUser, getRandomMatch } from '../api';  // 删除getMatches

const Matches = () => {
  const [randomMatch, setRandomMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleLike = async (userId) => {
    try {
      const message = await likeUser(userId);
      console.log(message);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDislike = async (userId) => {
    try {
      const message = await dislikeUser(userId);
      console.log(message);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGetRandomMatch = async () => {
    try {
      const match = await getRandomMatch();
      setRandomMatch(match);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="matches-container">
      <h1>Matches</h1>
      <button onClick={handleGetRandomMatch}>Get Random Match</button>
      {randomMatch && <MatchCard match={randomMatch} onLike={handleLike} onDislike={handleDislike} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Matches;
