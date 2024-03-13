// Style Imports
import './assets/css/index.css';
// Utility Imports
import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Component Imports
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

const root = document.getElementById('root');

if (root !== null) {
  const hydrate = root.hasChildNodes();

  ReactDOM.createRoot(root, { hydrate }).render(
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Auth0Provider
          domain="dev-d4jiv6bsx28qa518.us.auth0.com"
          clientId="mk0DJQkDHbdwRBAaazq8quR5p6w7FZeT"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <ApolloProvider client={client}>
            <Router>
              <Routes>
                <Route path="/" element={<App />}>
                  <Route index element={<LandingPage />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Router>
          </ApolloProvider>
        </Auth0Provider>
      </Suspense>
    </StrictMode>
  );
}
