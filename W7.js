       function formatDate(timestamp){
    let now = new Date(timestamp);
    let hours= date.getHours();
      if(hours<10){
        minutes='0${hours}';
    }
    let minutes= date.getMinutes();
    if(minutes<10){
        minutes='0${minutes}';
    }

    let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
    let day= [days.getDay()];
    return '${day} ${hours}:${minutes}';
}
function displayForecast(){
  let forecastElement=document.querySelector("#forecast");
let forecastHTML ='<div class="row">';
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
days.forEach(function (day){
  forecastHTML=   
  forecastHTML + 
    
             '  <div class="col-2">
                <div class="weather-forecast-date"> ${day}</div>
                <img src="videos/cloud.png.mp4" alt="" width="70" />
                <div class="weather-forecast-temp"></div>
                <span class="weather-forecast-temp-max">
                70°F</span>
                <span class="weather-forecast-temp-min">
                55°F</span>
</div>
</div>
';
});
//location
function displayTemperature (response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let datetimeElement=document.querySelector("#datetime");
    let iconElement=document.querySelector("icon");


    temperatureElement.innerHTML= Math.round
  (response.data.main.temp);
  cityElement.innerHTML= response.data.name;
  descriptionElement.innerHTML= response.data.weather(0).description;
  humidityElement.innerHTML= response.data.main.humidity;
  windElement.innerHTML= Math.round(response.data.main.wind.speed);
  datetimeElement.innerHTML= formatDate(response.data.dt* 1000);
  
}
iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );



function search(city) {
let apiKey = "e9d357a0815457214193d378dfb84291";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
axios.get(apiUrl).then(displayTemperature); 
}

axios.get(apiUrl).then(displayTemperature); 

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-search");
    search(cityInputElement.value); 
}




function displayCelciusTemperature(event) {
    event.preventDefault();
    let celciusTemperature = (temperatureElement.innerHTML - 32) * 5/9;
   let temperatureElement= document.querySelector("#temperature");
   temperatureElement.innerHTML= Math.round (celciusTemperature);
} 

function displayFarenheitTemperature(event) {
    event.preventDefault();
    let farenheitTemperature = (farenheitTemperature - 32) * 5/9;
   let temperatureElement= document.querySelector("#temperature");
   temperatureElement.innerHTML= Math.round (farenheitTemperature);
} 



function displayWeatherCondition(response) {
  let name = response.data.name;
  let nameElement = document.querySelector("#city");
  nameElement.innerHTML = name;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}ºC`;

  document.querySelector("#weather").innerHTML = response.data.weather[0].main;
}

function displayPositionWeather(response) {}

function findPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "e9d357a0815457214193d378dfb84291";
  let apiCoordUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiCoordUrl).then(displayPositionWeather);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findPosition);
}

let farenheitTemperature=null

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click",displayCelciusTemperature);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click",displayFarenheitTemperature);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let button = document.querySelector("#current-location-button");
button.addEventListener("click", getCurrentPosition);

search("New York");

console.log(formatDate(new Date()));
