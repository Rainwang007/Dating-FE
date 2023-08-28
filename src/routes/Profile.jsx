// src/routes/Profile.jsx
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  const [userData, setUserData] = useState({});

  // 模拟从API获取用户资料
  useEffect(() => {
    const fetchData = async () => {
      const mockData = {
        id: 1,
        name: 'Alice',
        age: 25,
        location: 'New York',
        bio: 'Love hiking and outdoor adventures.',
      };
      setUserData(mockData);
    };
    fetchData();
  }, []);

  const handleUpdateProfile = (newData) => {
    // 这里通常会有API调用来更新用户资料
    setUserData({ ...userData, ...newData });
  };

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <UserProfile userData={userData} onUpdateProfile={handleUpdateProfile} />
    </div>
  );
};

export default Profile;
