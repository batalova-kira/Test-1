// Function розмітка

export default function createMarkupCard(params) {
    // Деструктуризация властивостей з запиту API
    
      const{data:{location:{name,country,region}}}=params;
     return params.data.forecast.forecastday.map(({date,day})=>{
      return `
      <ul  class="card list"> Data: ${date}
      <li class="item-card">Country: ${country}</li>
      <li class="item-card">City: ${name}</li>
      <li class="item-card">Temp: ${day.avgtemp_c}°С</li>
    </ul>`
     })
  };