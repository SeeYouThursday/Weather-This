import { Input } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';

export default function Search() {
  const [city, setCity] = useState('');

  // useEffect(() => {
  //   geoLocateAPI(city);
  // }, [city]);

  const handleCityInput = (e) => {
    const newCity = e.target.value.trim();
    setCity(newCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    geoLocateAPI(city); // Calls the function to fetch data based on the city input
  };

  return (
    <form
      style={{
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 5,
        margin: 0,
        display: 'flex',
      }}
      onSubmit={handleSubmit}
    >
      <Input
        variant="standard"
        color="blue"
        label="Search"
        placeholder="Search"
        icon={<i className="fas fa-heart" />}
        onChange={handleCityInput}
      />
    </form>
  );
}
