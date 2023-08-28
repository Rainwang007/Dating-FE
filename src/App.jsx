// src/App.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Matches from './routes/Matches';
import Chat from './routes/Chat';
import Profile from './routes/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/matches" component={Matches} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
