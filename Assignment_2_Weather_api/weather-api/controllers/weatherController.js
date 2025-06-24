const Weather = require('../models/Weather');

const getWeather = async (req, res) => {
  const city = req.query.city || 'Unknown';

  // Mock data
  const mockData = {
    city,
    temperature: 30,
    humidity: 60,
    condition: 'Clear'
  };

  try {
    const weather = new Weather(mockData);
    await weather.save();

    res.json(mockData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to store mock weather data' });
  }
};

module.exports = { getWeather };
