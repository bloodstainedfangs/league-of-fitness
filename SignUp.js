// page set-up - currently does not authenticate user
// will instantly go to home page upon button click

// import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // initialize the navigate function for programmatic navigation
  const navigate = useNavigate();

  // state to manage form data
  const [formData, setFormData] = useState({
    name: '', 
    username: '',
    email: '', 
    confirmEmail: '', 
    password: '', 
    confirmPassword: '', 
  });

  // handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // get name and value of input field
    setFormData({ ...formData, [name]: value }); // update corresponding field in the state
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default submission behavior

    // temp disable validation logic
    /*
    if (formData.email !== formData.confirmEmail || formData.password !== formData.confirmPassword) {
      alert('Email or password does not match!');
      return;
    }
    */

    // redirect to home page after sign-up
    navigate('/home');
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

  // styles for input fields
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

  // styles for banner
  const bannerStyle = {
    backgroundColor: '#0b8943', 
    color: 'white', 
    textAlign: 'center', 
    padding: '20px 0', 
    fontSize: '24px', 
    fontWeight: 'bold', 
  };

  return (
    <>
      {/* league of fitness Banner */}
      <div style={bannerStyle}>
        LEAGUE OF FITNESS ❚█══█❚
      </div>

      {/* sign-Up form */}
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Sign Up</h2> {/* form title */}
        {/* name input */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* username input */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* email input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* confirm email */}
        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirm Email Address"
          value={formData.confirmEmail}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* confirm password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={inputStyle}
        />
        {/* submit button */}
        <button type="submit" style={buttonStyle}>
          SIGN UP
        </button>
      </form>
    </>
  );
};

export default SignUp;