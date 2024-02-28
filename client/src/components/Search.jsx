import { Input } from '@material-tailwind/react';
import { useState, ErrorBoundary } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import IconButton from '@material-tailwind/react';
import dayjs from 'dayjs';
import WeatherCard from './WeatherCard';
export default function Search() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   geoLocateAPI(city);
  // }, [city]);

  const renderWeatherCards = (weather) => {
    if (!Array.isArray(weather)) {
      return null;
    }
    const todaysDate = dayjs().format('(M/D/YYYY)');
    const weatherData = weather.filter((element) => {
      let date = element.dt_txt.split(' ')[0];
      let time = element.dt_txt.split(' ')[1];
      return date !== todaysDate && time === '15:00:00';
    });

    return (
      <>
        {weatherData.map((card, index) => (
          <WeatherCard key={index} date={card.dt_txt} />
        ))}
      </>
    );
  };

  const handleCityInput = (e) => {
    const newCity = e.target.value.trim();
    setCity(newCity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      const coords = await geoLocateAPI(city); // Calls the function to fetch data based on the city input
      //redirect to results page
      const { lat, long } = coords;
      const weatherData = await fiveDayForecast(lat, long);
      console.log(weatherData); // Success!
      setWeather(weatherData.list);
      console.log(weather);
      // setFormSubmit(true);
      return renderWeatherCards(weather);
      // Pass the weather data to the renderWeatherCards function
    } catch (err) {
      console.log(err);
      //!Render form error later
    }
  };

  return (
    <>
      {' '}
      <form
        method="post"
        style={{
          backgroundColor: '',
          borderRadius: 3,
          padding: '5px 5px 0px 3px',
          margin: 2,
          display: 'flex',
        }}
        onSubmit={handleSubmit}
      >
        <Input
          variant="standard"
          color="white"
          label="Search"
          placeholder="Search"
          icon={<i className="fas fa-heart" />}
          onChange={handleCityInput}
        />
      </form>
      {renderWeatherCards({ ...weather })}
    </>
  );
}
