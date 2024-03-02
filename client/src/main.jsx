import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Component Imports
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';

import ErrorPage from './pages/ErrorPage.jsx';
// Style Imports
import './assets/css/index.css';
import { StrictMode } from 'react';

// const auth0Domain = import.meta.env.VITE_DOMAIN; // replace with your Auth0 domain
// const clientId = import.meta.env.VITE_CLIENT_ID; // replace with your Auth0 client ID
const redirectUri = window.location.origin; // replace with your redirect URI

// const url = `https://${auth0Domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid%20profile%20email`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-d4jiv6bsx28qa518.us.auth0.com"
      clientId="mk0DJQkDHbdwRBAaazq8quR5p6w7FZeT"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />s
            {/* <Route path="/logout" component={Logout} /> //! Will work on redirect to landing on logout*/}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </StrictMode>
);
