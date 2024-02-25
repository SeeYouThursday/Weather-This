import dotenv from 'dotenv';

//! TODO:
//?? Rewrite GeoLocateAPI
// import dotenv from 'dotenv';
// dotenv.config();
const weatherApiKey = import.meta.env.VITE_WEATHER_API;
// const weatherApiKey = process.env.VITE_WEATHER_API;

export const geoLocateAPI = async (city) => {
  const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApiKey}`;
  fetch(geoAPI);
  try {
    const response = await fetch(geoAPI);
    if (response.status !== 200) {
      return `${response.status} -- It's gotten messy here`;
    }
    const data = await response.json();

    if (data[0] !== '' && data.length > 0) {
      // let currentData = data[0];
      const long = data[0].lon;
      const lat = data[0].lat;
      const coords = { lat, long };
      console.log(coords);
      return coords;
      // return fiveDayForecast(long, lat);
    }
  } catch (err) {
    console.error(err);
  }
};
export async function fiveDayForecast(lat, long) {
  //   api kept switching up lat and longs, so the variables have been switched
  const openWeatherAPIKeyUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${long}&long=${lat}&appid=${weatherApiKey}&units=imperial`;

  const data = await fetch(openWeatherAPIKeyUrl);

  await data.json();

  return data.json();
  // await function (data) {
  //     let weatherDataArray = data.list;
  //     renderFiveDayLoop(weatherDataArray);
  //   });
}
