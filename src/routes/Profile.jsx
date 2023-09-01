import React, { useState, useEffect } from 'react';
import { fetchProfile, updateProfile } from '../api';

const InputField = ({ label, id, value, onChange, isEditable }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      readOnly={!isEditable}
    />
  </div>
);

const Profile = () => {
  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const [profile, setProfile] = useState({
    name: '',
    age: '',
    location: '',
    bio: '',
    avatar: ''
  });
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfile();
        setProfile({ ...profile, ...data });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(profile);
      setIsEditable(false);
    } catch (err) {
      console.error("Update profile failed:", err.response.data);
    }
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <button onClick={toggleEdit}>{isEditable ? 'Cancel' : 'Edit Profile'}</button>
      <InputField label="Name" id="name" value={profile.name} onChange={handleInputChange} isEditable={isEditable} />
      <InputField label="Age" id="age" value={profile.age} onChange={handleInputChange} isEditable={isEditable} />
      <InputField label="Location" id="location" value={profile.location} onChange={handleInputChange} isEditable={isEditable} />
      <InputField label="Bio" id="bio" value={profile.bio} onChange={handleInputChange} isEditable={isEditable} />
      {isEditable && <button onClick={handleUpdateProfile}>Update Profile</button>}
    </div>
  );

};

export default Profile;
