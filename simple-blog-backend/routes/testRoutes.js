
const express = require('express');
const router = express.Router();

router.get('/snap1', (req, res) => {
  res.send('✅ Snap 1 test route is working!');
});

router.get('/snap2', (req, res) => {
  res.send('✅ Snap 2 test route is working!');
});

router.get('/snap3', (req, res) => {
  res.send('✅ Snap 3 test route is working!');
});

module.exports = router;
