import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <img src={user.avatar || 'default-avatar.png'} alt="User Avatar" />
        <p><strong>Name:</strong> {user.name || ''}</p>
        <p><strong>Age:</strong> {user.age || ''}</p>
        <p><strong>Location:</strong> {user.location || ''}</p>
        <p><strong>Bio:</strong> {user.bio || ''}</p>
      </div>
    </div>
  );
};

export default UserProfile;
