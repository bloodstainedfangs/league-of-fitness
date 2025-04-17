// import libaries
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// import components
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

// import pages
import Welcome from './pages/Welcome'; 
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn'; 
import SignOut from './pages/SignOut';

// import pages - main website
import Home from './pages/Home'; 
import Profile from './pages/Profile'; 
import Friends from './pages/Friends'; 
import Leaderboard from './pages/Leaderboard'; 
import Calendar from './pages/Calendar'; 
import Exercises from './pages/Exercises'; 

const App = () => {
  // get current location to conditionally render components
  // not every page needs the navbar links
  const location = useLocation();

  // styles for the app container
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  // styles for the content area
  const contentStyle = {
    flex: '1',
  };

  return (
    <div style={appStyle}>
      {/* conditionally render Navbar */}
      {location.pathname !== '/' && // exclude welcome page
        location.pathname !== '/welcome' && // exclude welcome route
        location.pathname !== '/signout' && // exclude sign-out page
        location.pathname !== '/signup' && // exclude sign-up page
        location.pathname !== '/signin' && // exclude sign-in page
        location.pathname !== '/home' && <Navbar />} {/* cxclude Home page */}

      {/* main content area */}
      <div style={contentStyle}>
        <Routes>
          {/* define routes for each page */}
          <Route path="/" element={<Welcome />} /> {/* default page */}
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/signout" element={<SignOut />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/friends" element={<Friends />} /> 
          <Route path="/leaderboard" element={<Leaderboard />} /> 
          <Route path="/calendar" element={<Calendar />} /> 
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>

      {/* footer component */}
      <Footer />
    </div>
  );
};

export default App;