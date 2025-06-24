const axios = require('axios');

const getWeatherByCity = async (city) => {
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

const response = await axios.get(url);
const data = response.data;

return {
    city: data.name,
    temperature: `${data.main.temp} °C`,
    humidity: `${data.main.humidity}%`,
    weather: data.weather[0].description,
    windSpeed: `${data.wind.speed} m/s`
};
};

module.exports = { getWeatherByCity };
