// Import Necessary Files
// Remove the unused import statement for 'React'
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { ComplexNavbar } from './components/Nav.jsx';
import WeatherNav from './components/WeatherNav.jsx';
import nightCity from './assets/images/backgrounds/night_city.svg';

// Making GraphQL Link
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const style = {
  background: {
    backgroundImage: `url(${nightCity})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '90vh',
    zIndex: -1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        {' '}
        <WeatherNav />
        <div style={style.background}>
          <Outlet />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
