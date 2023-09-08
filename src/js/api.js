import axios from "axios";

// Головний URL

const URL = 'https://api.weatherapi.com/v1';

// Headers запитів

const historyWeather = '/history.json';
const currentWeather = '/current.json';

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

const responseYesterday= await axios.get(`${URL}${historyWeather}?${params}&dt=${'2023-09-06'}`);
  const responseToday = await axios.get(`${URL}${currentWeather}?${params}&dt=${'2023-09-08'}`);
  const responseTomorrow = await axios.get(`${URL}${currentWeather}?${params}&dt=${'2023-09-11'}`);
return [responseYesterday,responseToday,responseTomorrow];

};

export { searchWeather };