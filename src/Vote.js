import React, { useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Vote.css';

const Vote = () => {
  const [party, setParty] = useState('');
  const [message, setMessage] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleVote = async () => {
    if (!user) {
      setMessage('You need to be logged in to vote.');
      return;
    }

    if (!party) {
      setMessage('Please select a party before voting.');
      return;
    }

    try {
      const token = await user.getIdToken();
      const response = await axios.post('http://localhost:5000/vote', { party, idToken: token });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error: Could not cast vote.');
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="vote-container">
      <div className="vote-card">
        <h1 className="vote-title">Vote for Your Party</h1>
        <select 
          value={party} 
          onChange={(e) => setParty(e.target.value)}
          className="party-select"
        >
          <option value="">Select a party</option>
          <option value="BJP">BJP</option>
          <option value="CONGRESS">CONGRESS</option>
          <option value="AAP">AAP</option>
          <option value="APNA_DAL">APNA DAL</option>
        </select>
        <button onClick={handleVote} className="vote-button">Vote</button>
        {message && <p className="message">{message}</p>}
        <div className="navigation-buttons">
          <button onClick={handleLogout} className="nav-button logout-button">Logout</button>
          <Link to="/results" className="nav-button">View Results</Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;