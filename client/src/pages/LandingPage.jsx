import React from 'react'; // Import the missing React package
// import nightCity from '../assets/images/backgrounds/night_city.svg'; //! Moved to
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Checkbox,
} from '@material-tailwind/react';
import Search from '../components/Search';
import Logo from '../assets/images/WeatherThisLogo.png';
import WeatherCard from '../components/WeatherCard';

// Logo middle
// Search bar middle
// Option to sign up
export default function LandingPage() {
  const style = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'white',
    minHeight: '300px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    margin: 'auto 0',
  };

  return (
    <div className="shadow-xl shadow-blue-gray-900/50">
      {/* <Typography color="blue" gradient="true">
        We look outside so you don&apos;t have to!
      </Typography> */}
      {/* <div style={style}> */}
      <div>
        <Search />
        {/* <WeatherCard /> */}
      </div>
    </div>
  );
}
