// Function розмітка

export default function createMarkupCard(params) {

    // Деструктуризация властивостей з запиту API
  
      const{data:{forecast:{forecastday}}}=params[0];
      const{data:{current:{temp_c},location: { country, name, localtime }}}=params[1];
      const{data:{forecast}}=params[2];
      
      return `  <ul  class="card list"> Weather Yesterday
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
    <li class="item-card">Temp: ${forecast.forecastday[1].day.avgtemp_c}°С</li>
    <li class="item-card">Data: ${forecast.forecastday[1].date}</li>
  </ul>
    `
  };