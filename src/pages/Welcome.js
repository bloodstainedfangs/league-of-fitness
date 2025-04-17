// imports
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  // styles for the main container
  const containerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif', 
    lineHeight: '1.6', 
    color: '#333', 
  };

  // styles for the text section
  const textStyle = {
    flex: '2', 
    textAlign: 'center', 
    paddingRight: '20px', 
  };

  // styles for the button container
  const buttonContainerStyle = {
    flex: '1', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px', 
  };

  // styles for the title
  const titleStyle = {
    fontSize: '32px', 
    fontWeight: 'bold', 
    color: '#0b8943', 
    marginBottom: '20px', 
  };

  // styles for the paragraphs
  const paragraphStyle = {
    fontSize: '18px', 
    marginBottom: '20px', 
  };

  // styles for the buttons
  const buttonStyle = {
    display: 'inline-block', 
    padding: '10px 20px', 
    backgroundColor: '#0b8943', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px', 
    fontSize: '18px', 
    textAlign: 'center', 
    width: '150px', 
  };

  return (
    <div style={containerStyle}>
      {/* welcoem message */}
      <div style={textStyle}>
        <h1 style={titleStyle}>LEAGUE OF FITNESS</h1> {/* Page title */}
        <p style={paragraphStyle}>
          Get ready to get fit and healthy! We have many features you can use including:
        </p>
        <p style={paragraphStyle}>
          <strong>Gamify aspects:</strong> Make fitness and health fun again! Add your friends and track each other's workouts and goals, and compete to have more points than them. You can also compete with our users around the globe to be the best!
        </p>
        <p style={paragraphStyle}>
          Track your calories and exercises to meet your fitness goals, including weight loss, gaining muscle mass, or even just being healthier! There's also great exercises linked directly in so you don't have to try to find the perfect exercise over millions of websites - it's right here and easily accessible alongside your tracking.
        </p>
      </div>

      {/* buttons */}
      <div style={buttonContainerStyle}>
        {/* sign-up */}
        <Link to="/signup" style={buttonStyle}>
          SIGN UP
        </Link>
        {/* sign-in */}
        <Link to="/signin" style={buttonStyle}>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Welcome;