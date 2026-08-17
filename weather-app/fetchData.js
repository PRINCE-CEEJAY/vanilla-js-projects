export async function fetchWeatherData() {
  try {
    const res = await fetch('https://www.');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
