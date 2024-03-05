import { useState, useEffect, Suspense } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import dayjs from 'dayjs';
import { Typography } from '@material-tailwind/react';
import Search from '../components/Search';
// import Logo from '../assets/images/WeatherThisLogo.png';
import WeatherCard from '../components/WeatherCard';

// Logo middle
// Search bar middle
// Option to sign up
export default function LandingPage() {
  // const [weather, setWeather] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, [city]);

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

      return filteredWeatherData.map((date) => (
        <WeatherCard
          key={date.dt}
          date={date.dt_txt}
          temp={date.main.temp}
          wind={date.wind.speed}
          humidity={date.main.humidity}
          icon={date.weather[0].icon}
          description={date.weather[0].description}
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ height: '100vh' }} className="flex flex-col justify-center">
        {searchResults.length ? (
          <div className="flex flex-col justify-center align-center">
            <Search
              landing={false}
              onResults={handleResults}
              weatherCards={weatherCards}
              onChange={handleCityInput}
            />
            <img
              src="/FiveDayLabel.gif"
              alt="Five Day Forecast"
              height="50%"
              width="50%"
              className="mx-auto"
            />
          </div>
        ) : null}

        <div>
          <div>
            <Search
              landing={true}
              onResults={handleResults}
              weatherCards={weatherCards}
              onChange={handleCityInput}
            />
          </div>
          <div className="flex flex-wrap grid sm:grid-cols-5 gap-2 m-2 justify-center">
            {searchResults}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
