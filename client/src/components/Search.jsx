import { Input } from '@material-tailwind/react';
import { useState, ErrorBoundary } from 'react';
import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
import IconButton from '@material-tailwind/react';
export default function Search() {
  const [city, setCity] = useState('');

  // useEffect(() => {
  //   geoLocateAPI(city);
  // }, [city]);

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
      return weatherData;
    } catch (err) {
      console.log(err);
      //!Render form error later
    }
  };

  return (
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
  );
}
