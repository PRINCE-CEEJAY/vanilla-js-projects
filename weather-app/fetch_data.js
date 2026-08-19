export async function fetchWeatherData(query, country) {
  const API_KEY = '98fe5a288a59e9a6ed2321ec2868d5e5';
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${query},${country}&appid=${API_KEY}&units=metric`;
  console.log(api_url);
  try {
    const res = await fetch(api_url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
