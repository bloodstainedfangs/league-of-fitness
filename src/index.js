// imports 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// global css styles
import './App.css';

// creating root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the app
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);