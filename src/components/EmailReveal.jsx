import React, { useState, useEffect } from 'react';


const EmailReveal = ({ emailMatches }) => {
  return (
    <div className="email-reveal-container">
      <h1>Email Matches</h1>
      <ul>
        {Object.keys(emailMatches).map((userId, index) => (
          <li key={index}>
            <strong>Username: </strong>{emailMatches[userId].username} <br />
            <strong>Email: </strong>{emailMatches[userId].email}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default EmailReveal;
