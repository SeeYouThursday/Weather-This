import WeatherCard from '../components/WeatherCard';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from '@material-tailwind/react';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';
// const { data, loading } = useQuery(QUERY_ME);
function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  // const { data, loading } = useQuery(QUERY_ME);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    isAuthenticated && (
      <Card>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Card>
    )
  );
}

export default Dashboard;
