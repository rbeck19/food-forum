import React from 'react';
import ReactDOM from 'react-dom/client';
  //getting BrowserRouter but going to call it Router instead
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './pages/App/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
