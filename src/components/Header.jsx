import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink romantic-header">
      <Link className="navbar-brand text-white" to="/">Dating App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/matches">Matches</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/chat">Chat</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
