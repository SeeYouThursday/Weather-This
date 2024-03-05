import { useState, useEffect, Suspense } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import dayjs from 'dayjs';
import { Input } from '@material-tailwind/react';
import WeatherCard from '../components/WeatherCard';

function Search({ landing, onResults, weatherCards, onChange }) {
  const [isFormVisible, setFormVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cards = await weatherCards();
    onResults(cards);
    if (landing) {
      setFormVisible(false);
    }
  };

  return (
    isFormVisible && (
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <form
            method="post"
            style={{
              backgroundColor: 'white',
              borderRadius: 3,
              padding: '5px 5px 0px 3px',
              margin: 2,
              display: 'flex',
            }}
            onSubmit={handleSubmit}
          >
            <Input
              variant="standard"
              color="blue"
              label="Search"
              placeholder="Enter City, State, or Zip"
              icon={<i className="fas fa-heart" />}
              onChange={onChange}
            />
          </form>
        </div>
      </div>
    )
  );
}

export default function LandingPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');

  const fetchWeatherData = async (city) => {
    try {
      const coords = await geoLocateAPI(city);
      const weatherData = await fiveDayForecast(coords.lat, coords.long);
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
    }
  };

  const handleCityInput = (e) => {
    const newCity = e.target.value.trim();
    setCity(newCity);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ height: '100vh' }} className="flex flex-col justify-center">
        <Search
          landing={!searchResults.length}
          onResults={setSearchResults}
          weatherCards={() => fetchWeatherData(city)}
          onChange={handleCityInput}
        />
        <div className="flex flex-wrap grid sm:grid-cols-5 gap-2 m-2 justify-center">
          {searchResults}
        </div>
      </div>
    </Suspense>
  );
}
