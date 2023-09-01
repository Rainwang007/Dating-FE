import React, { useState, useEffect } from 'react';
import { getEmailMatches } from '../api';  
import './GetEmail.css';  // 引入自定义CSS

const GetEmail = () => {
  const [emailMatches, setEmailMatches] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmailMatches = async () => {
      try {
        const fetchedEmailMatches = await getEmailMatches();
        setEmailMatches(fetchedEmailMatches);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEmailMatches();
  }, []);

  return (
    <div className="get-email-container">
      <h1>Revealed Emails</h1>
      {error && <p className="error">{error}</p>}
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

export default GetEmail;
