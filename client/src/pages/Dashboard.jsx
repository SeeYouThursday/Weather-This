import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Typography,
  Button,
  CardHeader,
  Avatar,
} from '@material-tailwind/react';
import WeatherNav from '../components/WeatherNav';
import Profile from '../components/Profile';
import SavedSearches from '../components/SavedSearches';
import DotLoader from 'react-spinners/DotLoader';
// https://www.davidhu.io/react-spinners/storybook/?path=/docs/dotloader--main
import { useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  // const { data, loading } = useQuery(QUERY_ME);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <Suspense fallback={<DotLoader />}>
      <WeatherNav />
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

      {isAuthenticated ? (
        <div>
          <Card>
            <Profile user={user} />
          </Card>
        </div>
      ) : null}
    </Suspense>
  );
}

export default Dashboard;
