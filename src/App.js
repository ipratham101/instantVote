import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Vote from './Vote';
import Results from './Results';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>InstantVote</h1>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/vote" /> : <Navigate to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vote" element={user ? <Vote /> : <Navigate to="/login" />} />
            <Route path="/results" element={user ? <Results /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Cast your vote online. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;