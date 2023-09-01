import React from 'react';

const MatchCard = ({ match, onLike, onDislike }) => {
  return (
    <div className="match-card">
      <img src={match.avatar} alt="Match Avatar" />
      <h3>{match.name}</h3>
      <p><strong>Age:</strong> {match.age}</p>
      <p><strong>Location:</strong> {match.location}</p>
      <button onClick={() => onLike(match.user_id)}>Like</button>
      <button onClick={() => onDislike(match.user_id)}>Dislike</button>
    </div>
  );
};

export default MatchCard;
