import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
// Style Imports
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Auth0Provider
        domain="dev-d4jiv6bsx28qa518.us.auth0.com"
        clientId="mk0DJQkDHbdwRBAaazq8quR5p6w7FZeT"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<LandingPage />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </Suspense>
  </StrictMode>
);
