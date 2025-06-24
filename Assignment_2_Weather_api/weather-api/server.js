require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const weatherRoute = require('./routes/weather');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/weatherDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:', err));

// Routes
app.use('/api/weather', weatherRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
