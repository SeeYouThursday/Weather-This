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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{ height: '70vh' }}
        className="flex flex-col align-center justify-center"
      >
        {searchResults.length ? (
          <>
            <picture>
              <source></source>
              <img src="/FiveDayLabel.png" alt="Five Day Forecast" />
            </picture>
            <Search
              landing={false}
              onResults={handleResults}
              weatherCards={weatherCards}
              onChange={handleCityInput}
            />
          </>
        ) : null}

        <div className="shadow-xl shadow-blue-gray-900/50">
          <div>
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
    </Suspense>
  );
}
