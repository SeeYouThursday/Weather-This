import dotenv from 'dotenv';
dotenv.config();
import { describe, expect, test } from '@jest/globals';
import { geoLocateAPI, fiveDayForecast } from '../utils/weather-fetch.js';

// describe('geoLocate API call async', async () => {
//   const data = await geoLocateAPI('Richmond');
//   expect(data).resolves.toBe(!null);
// });

describe('geoLocate API call async', async () => {
  test('should return a valid response for Richmond, VA coordinates', async () => {
    const data = await geoLocateAPI('Richmond');
    expect(data).not.toBeNull();
  });
});

describe('geoLocate API call lat/long', () => {
  test('data should lat of Richmond', async () => {
    const data = await geoLocateAPI('Richmond');
    expect(data[0].lon).resolves.not.toBeNull();
  });
});

// test('fiveDayForecast will fetch 5 day forecast from API', async () => {
//   const fiveDay = await fiveDayForecast('37.5407', '77.4360');
//   console.log(fiveDay);
//   expect(typeof fiveDay).toBe('array');
// });

// test('fiveDayForecast will fetch 5 day forecast from API', async () => {
//   const fiveDay = await fiveDayForecast('37.5407° N', '77.4360° W');
//   console.log(fiveDay);
//   expect(fiveDay.cod).toBe('200');
// });
