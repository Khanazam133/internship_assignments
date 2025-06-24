const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../services/weatherService');

router.get('/:city', async (req, res) => {
city = req.params.city;
try {
    const weather = await getWeatherByCity(city);
    resconst.json(weather);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

module.exports = router;
