const weatherApiKey = import.meta.env.VITE_WEATHER_API;

const fetchingData = async (api) => {
  const response = await fetch(api);
  if (response.status !== 200) {
    return `${response.status} -- It's gotten messy here`;
  }
  const data = await response.json();

  return data;
};

export const geoLocateAPI = async (city) => {
  const countryCode = 840; //future dev - include full list to choose from
  const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${weatherApiKey}`;
  try {
    const data = await fetchingData(geoAPI);

    if (data[0] !== '' && data.length > 0) {
      // let currentData = data[0];
      const long = data[0].lon;
      const lat = data[0].lat;
      const coords = { lat, long };
      console.log(coords);
      return coords;
    }
  } catch (err) {
    console.error(err);
  }
};

export const fiveDayForecast = async (lat, long) => {
  //   api kept switching up lat and longs, so the variables have been switched
  const fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=imperial`;

  try {
    const data = await fetchingData(fiveDayForecast);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
