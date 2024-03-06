import { Input } from '@material-tailwind/react';
import { useState } from 'react';

//! imports moved to parent
// import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
// import dayjs from 'dayjs';
// import WeatherCard from './WeatherCard';

export default function Search({ landing, onResults, weatherCards, onChange }) {
  // const [city, setCity] = useState('');
  // const [weatherCardsData, setWeatherCardsData] = useState([]);
  const [isFormVisible, setFormVisible] = useState(true);

  //Handles submit and setting state for rendering cards
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cards = await weatherCards();
    onResults(cards);
    if (landing) {
      setFormVisible(false);
    }
  };

  //Form JSX
  return (
    <>
      {' '}
      {isFormVisible && (
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
      )}{' '}
    </>
  );
}

//!Logic moved to parent
//Handles change in input
// const handleCityInput = (e) => {
//   const newCity = e.target.value.trim();
//   setCity(newCity);
// };

//Logic to render cards based on fetch req to OpenWeather
// const weatherCards = async () => {
//   try {
//     const coords = await geoLocateAPI(city);
//     const { lat, long } = coords;
//     const weatherData = await fiveDayForecast(lat, long);
//     const weatherList = weatherData.list;

//     const todaysDate = dayjs().format('(M/D/YYYY)');
//     const filteredWeatherData = weatherList.filter((element) => {
//       let date = element.dt_txt.split(' ')[0];
//       let time = element.dt_txt.split(' ')[1];
//       return date !== todaysDate && time === '15:00:00';
//     });

//     return filteredWeatherData.map((date) => (
//       <WeatherCard key={date.dt} date={date.dt_txt} temp={date.main.temp} />
//     ));
//   } catch (err) {
//     console.log(err);
//     //!Render form error later
//   }
// };
