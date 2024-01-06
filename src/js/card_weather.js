import createMarkupCard from './markup_weather';
import getRefs from './refs';
const refs = getRefs();

export default  function createCardWeather(res) {
    console.log(res);
    const markupCard = createMarkupCard(res);
    refs.cardWeather.innerHTML = markupCard.join("");
};