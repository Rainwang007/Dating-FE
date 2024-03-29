import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { likeUser, dislikeUser, getRandomMatch } from '../api';  // 删除getMatches
import './Matches.css';  // 引入自定义CSS

const Matches = () => {
  const [randomMatch, setRandomMatch] = useState(null);
  const [error, setError] = useState(null);


  const handleLike = async (userId) => {
    try {
      const message = await likeUser(userId);
      console.log(message);
      alert('You liked the user!');
      handleGetRandomMatch(); 
    } catch (err) {
      setError(err.message);
      alert('An error occurred while liking the user.'); 
      handleGetRandomMatch(); 
    }
  };
  
  const handleDislike = async (userId) => {
    try {
      const message = await dislikeUser(userId);
      console.log(message);
      alert('You disliked the user!'); 
      handleGetRandomMatch(); 
    } catch (err) {
      setError(err.message);
      alert('An error occurred while disliking the user.'); 
      handleGetRandomMatch(); 
    }
  };

  const handleGetRandomMatch = async () => {
    try {
      const match = await getRandomMatch();
      console.log("Received match:", match);  // 打印获取的 match 对象
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
