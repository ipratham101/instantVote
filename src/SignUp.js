// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/vote');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSignUp}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/vote');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;