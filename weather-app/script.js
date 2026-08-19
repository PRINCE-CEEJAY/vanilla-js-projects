import { fetchWeatherData } from './fetch_data.js';

let cityName = document.getElementById('city-name');
let cityInput = document.getElementById('city-input');
// let countryName = document.getElementById('country-name');
let description = document.getElementById('description');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('wind');
let feelsLike = document.getElementById('feels-like');
let date = document.getElementById('date');
const searchBtn = document.getElementById('search-btn');

const API_KEY = '98fe5a288a59e9a6ed2321ec2868d5e5';

searchBtn.addEventListener('click', async () => {
  if (!cityInput.value) return;
  let country = 'nigeria';

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value},${country}&appid=${API_KEY}&units=metric`;

  let newData = await fetchWeatherData(API_URL);
  console.log(newData);
  updateUI(newData);
});

function updateUI(data) {
  description.innerText = data.weather[0].description;
  cityName.innerText = data.name.toUpperCase();
  temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;

  humidity.innerText = `${data.main.humidity} %`;
  windSpeed.innerText = `${data.wind.speed} km/h`;
  feelsLike.innerHTML = `${Math.floor(data.main.feels_like)}°C`;
  date.innerText = new Date().toLocaleDateString();
}
