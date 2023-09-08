// Function розмітка

export default function createMarkupCard(params) {
    // Деструктуризация властивостей з запиту API
    //// додала картинку й текст
      const{data:{location:{name,country}, current:{condition
:{text, icon}}
}}=params;
     return params.data.forecast.forecastday.map(({date,day})=>{
      return `
      <ul  class="card list"> Data: ${date}
      <li class="item-card">Country: ${country}</li>
      <li class="item-card">City: ${name}</li>
      <li class="item-card">Temp: ${day.avgtemp_c}°С</li>
      <li class="item-card"> ${text}</li>
      <li class="item-card"><img src="${icon}" alt="
weather"></li>
    </ul>`
     })
  };