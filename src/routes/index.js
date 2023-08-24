// src/routes/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Matches from '../components/Matches';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/matches" component={Matches} />
       
      </Switch>
    </Router>
  );
};

export default Routes;
