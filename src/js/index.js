import { searchWeather } from './api';
import getRefs from './refs';

import createCardWeather from './card_weather'
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





