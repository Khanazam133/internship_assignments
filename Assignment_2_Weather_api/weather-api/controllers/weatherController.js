const axios = require('axios');
const Weather = require('../models/Weather');

const getWeather = async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);

    const data = {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].main
    };

    const weather = new Weather(data);
    await weather.save();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
};

module.exports = { getWeather };
