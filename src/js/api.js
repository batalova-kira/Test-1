import axios from "axios";
const URL = 'http://api.weatherapi.com/v1';
const historyWeather = '/history.json';
const currentWeather = '/current.json';


const searchWeather = async (weatherCity) => {
  const params = new URLSearchParams({
    key: "a54e7e0e7efc4533b3d145742230709",
    method: 'GET',
    lang: 'uk',
    q: weatherCity,

  });
const responseYesterday= await axios.get(`${URL}${historyWeather}?${params}&dt=${'2023-09-06'}`);
  const responseToday = await axios.get(`${URL}${currentWeather}?${params}`);
  const responseTomorrow = await axios.get(`${URL}${currentWeather}?${params}&dt=${'2023-09-10'}`);
return [responseYesterday,responseToday,responseTomorrow];
};

export { searchWeather };