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

// Logo middle
// Search bar middle
// Option to sign up
export default function LandingPage() {
  const style = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '30vh',
    width: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  };

  return (
    <>
      <div style={style}>
        {/* <img src={Logo} /> */}
        <Search />
      </div>
    </>
  );
}
