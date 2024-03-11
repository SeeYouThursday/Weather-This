import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
  Spinner,
} from '@material-tailwind/react';
import WeatherNav from '../components/WeatherNav';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';
// const { data, loading } = useQuery(QUERY_ME);

function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const navigate = useNavigate();
  // const { data, loading } = useQuery(QUERY_ME);

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     navigate('/');
  //   }
  // }, [isAuthenticated, isLoading, navigate]);

  return (
    <>
      {/* <WeatherNav /> */}

      {isAuthenticated && !isLoading ? (
        <Card>
          {user ? (
            <>
              <img
                src={user.picture}
                alt={user.name}
                height={100}
                width={100}
              />{' '}
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </>
          ) : null}
        </Card>
      ) : null}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          minWidth: '100vh',
        }}
      >
        <DotLoader color="#36d7b7" loading={isLoading} size={100} />
      </div>
    </>
  );
}

export default Dashboard;
