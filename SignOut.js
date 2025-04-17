// page set-up - currently does not authicate user
// will instantly go to home page upon button click

// imports
import React from 'react';
import { Link } from 'react-router-dom';

const SignOut = () => {
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

      {/* main content */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {/* sign-out message */}
        <h1>You have been signed out.</h1>
        <p>Thank you for using League of Fitness!</p>

        {/* link to welcome page */}
        <Link
          to="/"
          style={{
            display: 'inline-block', 
            padding: '10px 20px', 
            backgroundColor: '#0b8943', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px', 
            fontSize: '18px', 
            marginTop: '20px', 
          }}
        >
          Go to Welcome Page
        </Link>
      </div>
    </>
  );
};

export default SignOut;