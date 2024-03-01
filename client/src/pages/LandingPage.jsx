import React from 'react'; // Import the missing React package
import { useState } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import dayjs from 'dayjs';
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
  // const [weather, setWeather] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');

  const handleCityInput = (e) => {
    const newCity = e.target.value.trim();
    setCity(newCity);
  };

  const weatherCards = async () => {
    try {
      const coords = await geoLocateAPI(city);
      const { lat, long } = coords;
      const weatherData = await fiveDayForecast(lat, long);
      const weatherList = weatherData.list;

      const todaysDate = dayjs().format('(M/D/YYYY)');
      const filteredWeatherData = weatherList.filter((element) => {
        let date = element.dt_txt.split(' ')[0];
        let time = element.dt_txt.split(' ')[1];
        return date !== todaysDate && time === '15:00:00';
      });
      // For testing purposes
      // for (const weathery of filteredWeatherData) {
      //   console.log(JSON.stringify(filteredWeatherData));
      // }
      return filteredWeatherData.map((date) => (
        <WeatherCard
          key={date.dt}
          date={date.dt_txt}
          temp={date.main.temp}
          humidity={date.main.humidity}
        />
      ));
    } catch (err) {
      console.log(err);
      //!Render form error later
    }
  };

  const handleResults = (results) => {
    setSearchResults(results);
  };

  // const style = {
  //   // backgroundImage: `url(${Logo})`,
  //   // backgroundSize: 'contain',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center',
  //   // backgroundColor: 'white',
  //   // minHeight: '300px',
  //   // minWidth: '300px',
  //   // display: 'flex',
  //   // flexDirection: 'column',
  //   // justifyContent: 'flex-end',
  //   // alignItems: 'center',
  //   borderRadius: 5,
  //   margin: 'auto 0',
  // };

  return (
    <div className="flex flex-col">
      {searchResults.length ? (
        <>
          <Search
            landing={false}
            onResults={handleResults}
            weatherCards={weatherCards}
            onChange={handleCityInput}
          />
          <Typography variant="h2" className="text-center">
            5 DAY FORECAST
          </Typography>
          <Typography className="text-center">
            (replace with img from Canva)
          </Typography>
        </>
      ) : null}

      <div className="shadow-xl shadow-blue-gray-900/50">
        {/* <div style={style}> */}
        <div
          // className="flex flex-col items-center justify-between rounded-xl border border-white bg-white/75 py-4 px-6 backdrop-blur-lg shadow-lg shadow-black/5 saturate-200"
          // style={style}
          className=""
        >
          {/* <img src={Logo} className="object-contain md:object-scale-down"></img> */}
          <Search
            landing={true}
            onResults={handleResults}
            weatherCards={weatherCards}
            onChange={handleCityInput}
          />
        </div>
        <div className="flex flex-wrap grid sm:grid-cols-5 gap-2 m-2">
          {searchResults}
        </div>
      </div>
    </div>
  );
}
