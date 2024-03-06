import { useState, useEffect, Suspense } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import dayjs from 'dayjs';
import { Input, Carousel, Typography } from '@material-tailwind/react';
import WeatherCard from '../components/WeatherCard';
import PropTypes from 'prop-types';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

function Search({ onResults, weatherCards, onChange }) {
  // const [isFormVisible, setFormVisible] = useState(true);
  //  removed landing prop to keep search bar available
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cards = await weatherCards();
    onResults(cards);
    // if (landing) {
    //   setFormVisible(false);
    // }
  };

  Search.propTypes = {
    onResults: PropTypes.func.isRequired,
    weatherCards: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  return (
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
  );
}

export default function LandingPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');
  const windowWidth = useWindowWidth();

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
      <div
        style={{ height: '100vh' }}
        className="flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-md aspect-w-1 aspect-h-1 py-5 px-4 mt-20">
          <div className="flex flex-row justify-center items-center">
            <img
              src="LGFiveDayLabel.gif"
              height={'150px'}
              width={'200px'}
              className="rounded-lg"
            />
          </div>

          <Search
            // landing={!searchResults.length}
            onResults={setSearchResults}
            weatherCards={() => fetchWeatherData(city)}
            onChange={handleCityInput}
          />
        </div>
        {searchResults.length > 0 ? (
          <Typography variant="h6" className="mt-3">
            {city}
          </Typography>
        ) : null}
        {windowWidth <= 768 ? (
          <div className="flex w-80 justify-center items-center m-auto my-5 flex w-80 justify-center">
            <Carousel loop="true" className="overflow-auto scrollbar-hide">
              {searchResults.map((result, index) => (
                <div key={index}>{result}</div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="flex flex-wrap grid sm:grid-cols-5 gap-2 m-2 justify-center">
            {searchResults}
          </div>
        )}
      </div>
    </Suspense>
  );
}
