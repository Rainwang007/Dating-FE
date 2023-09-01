import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser,loginUser } from '../api';  // Import from the centralized API file
import './Register.css';  // 引入自定义CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      alert('Passwords do not match.');
      return;
    }

    try {
      await registerUser(username, email, password); 
      setError(null); // Clear any existing errors
      alert('Registration successful!'); 
          // 自动登录
    try {
      const token = await loginUser(email, password);  // 使用登录API函数
      localStorage.setItem('token', token);  // 将令牌存储在localStorage中
    } catch (loginErr) {
      alert('Auto login failed: ' + loginErr.message);  // 如果自动登录失败，显示错误
      return;
    }

      navigate('/profile');  
    } catch (err) {
      setError(err.message);
      alert('Registration failed: ' + err.message);
    }
  };
  
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;