// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Results.css'; // Ensure you have a CSS file for styling

// const Results = () => {
//   const [results, setResults] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await axios.get('/results');
//         setResults(response.data);
//       } catch (error) {
//         console.error('Error fetching results:', error);
//       }
//     };

//     fetchResults();
//   }, []);

//   if (!results) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="results-container">
//       <h1 className="results-title">📊 Election Results</h1>
//       <h2 className="results-winner">🏆 Winner till now: {results.winner}</h2>
//       <table className="results-table">
//         <thead>
//           <tr>
//             <th>Party</th>
//             <th>Votes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(results.votes).map(([party, count]) => (
//             <tr key={party}>
//               <td>{party}</td>
//               <td>{count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => navigate('/vote')} className="back-button">🔙 Go to Vote Page</button>
//     </div>
//   );
// };

// export default Results;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Results.css'; 


const axiosInstance = axios.create({
  baseURL: 'https://instantvote1.onrender.com', 
});

const Results = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axiosInstance.get('/results');
        setResults(response.data);
        setError(null); // Clear previous errors
      } catch (error) {
        // Log error details
        console.error('Error fetching results:', error.response || error.message);
        setError('Failed to load results. Please try again later.');
      }
    };

    fetchResults();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!results) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="results-container">
      <h1 className="results-title">📊 Election Results</h1>
      <h2 className="results-winner">🏆 Winner till now: {results.winner}</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results.votes).map(([party, count]) => (
            <tr key={party}>
              <td>{party}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/vote')} className="back-button">🔙 Go to Vote Page</button>
    </div>
  );
};

export default Results;


