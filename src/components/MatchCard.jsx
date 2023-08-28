// src/components/MatchCard.jsx
import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <img src={match.avatar} alt="Match Avatar" />
      <h3>{match.name}</h3>
      <p><strong>Age:</strong> {match.age}</p>
      <p><strong>Location:</strong> {match.location}</p>
      <button onClick={() => console.log(`Chat with ${match.name}`)}>Chat</button>
    </div>
  );
};

export default MatchCard;
