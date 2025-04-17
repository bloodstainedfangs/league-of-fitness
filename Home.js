// imports
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* league of fitness banner */}
      <div
        style={{
          backgroundColor: '#0b8943', 
          color: 'white', 
          textAlign: 'center', 
          padding: '20px 0',
          fontSize: '24px', 
          fontWeight: 'bold', 
        }}
      >
        LEAGUE OF FITNESS ❚█══█❚
      </div>

      {/* main Content */}
      <div style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '50px' }}>
        {/* Welcome Message */}
        <h1>WELCOME TO LEAGUE OF FITNESS</h1>
        <p>
          Get ready to get fit, have fun, and compete <br />
          with other users and friends!
        </p>

        {/* buttons to link to other sections*/}
        <div style={{ marginTop: '20px' }}>
          {/* sign out, profile, friends */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            {/* sign-out button */}
            <Link
              to="/signout"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Sign Out
            </Link>

            {/* profile button */}
            <Link
              to="/profile"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Profile
            </Link>

            {/* friends button */}
            <Link
              to="/friends"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Friends
            </Link>
          </div>

          {/* leaderboard, calendar, exercises */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            {/* leaderboard button */}
            <Link
              to="/leaderboard"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Leaderboard
            </Link>

            {/* calendar button */}
            <Link
              to="/calendar"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Calendar
            </Link>

            {/* exercises button */}
            <Link
              to="/exercises"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0b8943', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '18px', 
                width: '200px', 
                textAlign: 'center', 
              }}
            >
              Exercises
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;