import React, { useState, useEffect } from 'react';
import { fetchProfile, updateProfile } from '../api';  // Import from the centralized API file

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfile();  // Use the imported fetchProfile function
        setProfile(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(profile);  // Use the imported updateProfile function
      setError(null); // Clear any existing errors
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {error && <p className="error">{error}</p>}
      {profile && (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={profile.email}
              readOnly
            />
          </div>
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
