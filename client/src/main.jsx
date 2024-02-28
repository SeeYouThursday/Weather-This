import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Component Imports
import App from './App.jsx'; // Uncommented the import statement for the App component
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Results from './pages/Results.jsx';
// Style Imports
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/results" element={<Results />} />
            {/* <Route path="/logout" component={Logout} /> //! Will work on redirect to landing on logout*/}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
