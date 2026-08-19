import { fetchWeatherData } from './fetch_data.js';

// DOM Elements
const cityName = document.getElementById('city-name');
const cityInput = document.getElementById('city-input');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind');
const feelsLike = document.getElementById('feels-like');
const date = document.getElementById('date');
const searchBtn = document.getElementById('search-btn');
let weatherIcon = document.getElementById('weather-icon');

searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const query = cityInput.value.trim();

  // Allow letters, spaces, and hyphens (min 1 char)
  if (!/^[a-zA-Z\s-]+$/.test(query)) {
    alert('Please enter a valid city name.');
    return;
  }

  try {
    const data = await fetchWeatherData(query, 'nigeria');
    updateUI(data);
    console.log(data);
  } catch (error) {
    alert(error.message || 'Failed to fetch weather data.');
  }
});

function updateUI(data) {
  if (!data || !data.weather) return;
  const iconCode = data.weather[0].icon;

  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  cityName.innerText = data.name.toUpperCase();
  description.innerText = data.weather[0]?.description || 'N/A';
  temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
  humidity.innerText = `${data.main.humidity}%`;

  // OpenWeather metric units return wind speed in m/s
  const windKmH = Math.round(data.wind.speed);
  windSpeed.innerText = `${windKmH} m/s`;

  feelsLike.innerHTML = `${Math.round(data.main.feels_like)}°C`;
  date.innerText = formattedDate();

  //   reset inpt
  cityInput.value = '';
}

function formattedDate() {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Date().toLocaleDateString('en-GB', options);
}
