export async function fetchWeatherData(api_url) {
  try {
    const res = await fetch(api_url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
