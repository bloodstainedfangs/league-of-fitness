import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const bannerStyle = {
    backgroundColor: '#0b8943', // Green color
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f4f4f4', // Light background for the navbar
    color: '#333',
  };

  const linkStyle = {
    color: '#0b8943', // Green color for links
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <>
      {/* Banner Section */}
      <div style={bannerStyle}>
        LEAGUE OF FITNESS ❚█══█❚
      </div>

      {/* Navbar Links */}
      <nav style={navStyle}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/friends" style={linkStyle}>Friends</Link>
        <Link to="/leaderboard" style={linkStyle}>Leaderboard</Link>
        <Link to="/calendar" style={linkStyle}>Calendar</Link>
        <Link to="/exercises" style={linkStyle}>Exercises</Link>
        <Link to="/signout" style={linkStyle}>Sign Out</Link>
      </nav>
    </>
  );
};

export default Navbar;