// page set-up - currently does not authicate user
// will instantly go to home page upon button click

// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  // initialize the navigate function for programmatic navigation
  const navigate = useNavigate();

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Automatically navigate to the home page
    navigate('/home');
  };

  // league of fitness banner
  const bannerStyle = {
    backgroundColor: '#0b8943',
    color: 'white', 
    textAlign: 'center', 
    padding: '20px 0', 
    fontSize: '24px', 
    fontWeight: 'bold', 
  };

  // styles for form container
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    gap: '15px', 
    maxWidth: '400px', 
    margin: '0 auto', 
    padding: '20px', 
    border: '1px solid #ccc', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // styles for input field
  const inputStyle = {
    width: '100%', 
    padding: '10px', 
    fontSize: '16px', 
    borderRadius: '5px', 
    border: '1px solid #ccc', 
  };

  // styles for submit button
  const buttonStyle = {
    padding: '10px 20px', 
    backgroundColor: '#0b8943', 
    color: 'white', 
    fontSize: '18px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
  };

  return (
    <>
      <div style={bannerStyle}>
        LEAGUE OF FITNESS ❚█══█❚
      </div>

      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Sign In</h2> {/* form title */}
        {/* email input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={inputStyle}
          disabled // disable input
        />
        {/* password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={inputStyle}
          disabled // disable input field
        />
        {/* submit Button - links to home */}
        <button type="submit" style={buttonStyle}>
          SIGN IN
        </button>
      </form>
    </>
  );
};

export default SignIn;