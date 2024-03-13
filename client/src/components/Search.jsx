import { Input } from '@material-tailwind/react';
import { useState } from 'react';

//! imports moved to parent
// import { geoLocateAPI, fiveDayForecast } from '../../utils/weather-fetch';
// import dayjs from 'dayjs';
// import WeatherCard from './WeatherCard';

export default function Search({ landing, onResults, weatherCards, onChange }) {
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
