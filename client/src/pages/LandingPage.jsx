import React from 'react'; // Import the missing React package
import { useState } from 'react';
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
import dayjs from 'dayjs';

// Logo middle
// Search bar middle
// Option to sign up
export default function LandingPage() {
  const [weather, setWeather] = useState('');

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

  // const renderWeatherCards = (weather) => {
  //   if (!Array.isArray(weather)) {
  //     return null;
  //   }
  //   const todaysDate = dayjs().format('(M/D/YYYY)');
  //   const weatherData = weather.filter((element) => {
  //     let date = element.dt_txt.split(' ')[0];
  //     let time = element.dt_txt.split(' ')[1];
  //     return date !== todaysDate && time === '15:00:00';
  //   });

  //   return (
  //     <>
  //       {weatherData.map((card) => (
  //         <WeatherCard key={card.dt_txt} date={card.dt_txt} />
  //       ))}
  //     </>
  //   );
  // };

  return (
    <div className="shadow-xl shadow-blue-gray-900/50">
      {/* <Typography color="blue" gradient="true">
        We look outside so you don&apos;t have to!
      </Typography> */}
      {/* <div style={style}> */}
      <div
        className="flex items-center justify-between rounded-xl border border-white bg-white/75 py-4 px-6 backdrop-blur-lg shadow-lg shadow-black/5 saturate-200"
        style={style}
      >
        <Search nav={false} />
        {/* {weather !== '' ? renderWeatherCards(weather) : null} */}
      </div>
      {/* <WeatherCard date={'3/5/2024'} /> */}
    </div>
  );
}
