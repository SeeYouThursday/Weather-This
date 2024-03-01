import { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from '@material-tailwind/react';

// const Dashboard = () => {
//   const [cities, setCities] = useState([]); // Fix: Corrected the variable name from setCites to setCities
//   return (
//     <>
//       <WeatherCard />
//     </>
//   );
// };

// export default Dashboard;

// Profile.js
import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';

const SAVE_USER = gql`
  mutation SaveUser($user: UserInput!) {
    saveUser(user: $user) {
      id
    }
  }
`;

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [saveUser] = useMutation(SAVE_USER);

  useEffect(() => {
    if (isAuthenticated) {
      saveUser({ variables: { user } });
    }
  }, [user, isAuthenticated, saveUser]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;
