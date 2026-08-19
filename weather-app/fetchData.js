let cityName = 'enugu';
let countryName = 'Nigeria';

const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryName}&appid=${process.env.API_KEY}`;

export async function fetchWeatherData() {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
