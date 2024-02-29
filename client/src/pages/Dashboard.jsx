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

const Dashboard = () => {
  const [cities, setCities] = useState([]); // Fix: Corrected the variable name from setCites to setCities
  return (
    <>
      <WeatherCard />
    </>
  );
};

export default Dashboard;
