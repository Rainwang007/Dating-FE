import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser } from '../api';  // Import from the centralized API file
import './Login.css';  // 引入自定义CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(email, password);  // Use the imported loginUser function

      // Store JWT token into localStorage or other client storage
      localStorage.setItem('token', token);
      window.alert("Login successful!");

      // Navigate to home page or other
      navigate('/profile');

      setError(null); // Clear any existing errors
    } catch (err) {
      setError(err.message);
    }
  };
  
  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      logoutUser().then(() => {
        localStorage.removeItem('token');
       
        window.location.reload();
      }).catch(err => {
        console.error("Logout failed:", err);
      });
    }
  };


 
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
