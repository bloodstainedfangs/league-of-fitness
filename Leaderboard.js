// imports
import React from 'react';
import Footer from '../components/Footer';

const Leaderboard = () => {
  // Placeholder data - input for api later
  const placeholderData = [
    { place: 1, username: 'User1', points: 100 },
    { place: 2, username: 'User2', points: 90 },
    { place: 3, username: 'User3', points: 80 },
    { place: 4, username: 'User4', points: 70 },
    { place: 5, username: 'User5', points: 60 },
    { place: 6, username: 'User6', points: 50 },
    { place: 7, username: 'User7', points: 40 },
    { place: 8, username: 'User8', points: 30 },
    { place: 9, username: 'User9', points: 20 },
    { place: 10, username: 'User10', points: 10 },
  ];

  // styles
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // ensure page takes up the full viewport height
  };

  // styles for the main content container
  const containerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif', 
    padding: '20px',
  };

  // styles for the leaderboard table
  const tableStyle = {
    borderCollapse: 'collapse', 
    width: '80%', 
    maxWidth: '600px', 
    margin: '20px 0', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  };

  // styles for table headers
  const thStyle = {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    padding: '10px', 
    textAlign: 'center', 
  };

  // styles for table cells
  const tdStyle = {
    border: '1px solid #ddd', 
    padding: '8px', 
    textAlign: 'center',
  };

  // styles for alternating row hover effect
  const trHoverStyle = {
    backgroundColor: '#f2f2f2', 
  };

  return (
    <div style={pageStyle}>
      {/* main content container */}
      <div style={containerStyle}>
        <h1>Leaderboard</h1> {/* Page title */}
        <table style={tableStyle}>
          <thead>
            <tr>
              {/* Table headers */}
              <th style={thStyle}>Place</th> 
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Points</th> 
            </tr>
          </thead>
          <tbody>
            {/* map through placeholder data to render rows */}
            {placeholderData.map((entry, index) => (
              <tr
                key={entry.place} // unique key for each row
                style={index % 2 === 0 ? trHoverStyle : null} // apply hover style for alternating rows
              >
                {/* display data */}
                <td style={tdStyle}>{entry.place}</td> 
                <td style={tdStyle}>{entry.username}</td> 
                <td style={tdStyle}>{entry.points}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;