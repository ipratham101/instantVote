import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Cool Voting App</h2>
      <p>Join us to participate in voting and see results!</p>
      <div className="home-buttons">
        <Link to="/signup" className="home-button signup">Sign Up</Link>
        <Link to="/login" className="home-button login">Log In</Link>
      </div>
    </div>
  );
};

export default Home;