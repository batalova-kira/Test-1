import axios from "axios";

// Головний URL

const URL = 'https://api.weatherapi.com/v1';

// Headers запитів

const historyWeather = '/history.json';
const currentWeather = '/current.json';
const forecastWeather = '/forecast.json';

// Function виклику API

const searchWeather = async (weatherCity) => {

// Праметри API запиту

  const params = new URLSearchParams({
    key: "a54e7e0e7efc4533b3d145742230709",
    method: 'GET',
    lang: 'uk',
    q: weatherCity,
  });

  // API запити

// const responseYesterday=  axios.get(`${URL}${historyWeather}?${params}&dt=${'2023-09-07'}`);
//   const responseToday =  axios.get(`${URL}${currentWeather}?${params}`);
  const responseTomorrow = await axios.get(`${URL}${forecastWeather}?${params}&days=3`);
  // const days = await Promise.all([responseYesterday,responseToday,responseTomorrow]);
return responseTomorrow;

};

export { searchWeather };