//! TODO:
//?? Require in dotenv.config()
//?? Rewrite GeoLocateAPI
const weatherApiKey = import.meta.env.WEATHER_API;

function geoLocateAPI(weatherData) {
  const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${weatherData}&appid=${weatherApiKey}`;
  fetch(geoAPI)
    .then(function (response) {
      if (response.status !== 200) {
        $cityName.text(response.status + "It's gotten messy here");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      if (data[0] !== '' && data.length > 0) {
        let currentData = data[0];
        long = data[0].lon;
        lat = data[0].lat;
        fiveDayForcast(long, lat);
        // renderCityNameDate(currentData); //! Change
      } else {
        $cityName.text("Yikes, that's not a valid city!"); //! Change
        return;
      }
    });
}

async function fiveDayForcast(lat, long) {
  //   api kept switching up lat and longs, so the variables have been switched
  const openWeatherAPIKeyUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${long}&long=${lat}&appid=${weatherApiKey}&units=imperial`;

  const data = await fetch(openWeatherAPIKeyUrl);

  await data.json();

  // await function (data) {
  //     let weatherDataArray = data.list;
  //     renderFiveDayLoop(weatherDataArray);
  //   });
}
