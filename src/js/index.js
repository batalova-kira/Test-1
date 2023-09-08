import { searchWeather } from './api';
import getRefs from './refs';

const refs = getRefs();
// Обробники подій

refs.form.addEventListener('submit', handlerWeather);

// Function обробника поції button

function handlerWeather(e) {
    e.preventDefault()

    // Запис події в input

    const weatherCity = e.currentTarget.elements.searchQuery.value;

    // Визов Promise запиту на API

    searchWeather(weatherCity).then(createCardWeather).catch(error => { console.log(error); })
};

// Function створення розмітки

function createCardWeather(res) {
    console.log(res);
    const markupCard = createMarkupCard(res);
    refs.cardWeather.innerHTML = markupCard;
};

// Function розмітка

function createMarkupCard(params) {

  // Деструктуризация властивостей з запиту API

  const { data: { forecast: { forecastday } } } = params[0];
  
    const{data:{current:{temp_c },location: { country, name, localtime }}}=params[1];
    const{data:{}}=params[2];
    
    return ` <ul  class="card list"> Weather Yesterday
    <li class="item-card">Country: ${country}</li>
    <li class="item-card">City: ${name}</li>
    <li class="item-card">Temp: ${forecastday[0].day.avgtemp_c}°С</li>
    <li class="item-card">Data: ${forecastday[0].date}</li>
  </ul>
    <ul  class="card list"> Weather Today
    <li class="item-card">Country: ${country}</li>
    <li class="item-card">City: ${name}</li>
    <li class="item-card">Temp: ${temp_c}°С</li>
    <li class="item-card">Data: ${localtime}</li>
  </ul>
  <ul  class="card list"> Weather Tomorrow
  <li class="item-card">Country: ${country}</li>
  <li class="item-card">City: ${name}</li>
  <li class="item-card">Temp: ${temp_c}°С</li>
  <li class="item-card">Data: ${localtime}</li>
</ul>
  `
};