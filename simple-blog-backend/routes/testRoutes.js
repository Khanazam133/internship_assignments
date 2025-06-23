
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Basic test routes
router.get('/snap1', (req, res) => {
  res.json({ success: true, message: '✅ Snap 1 test route is working!' });
});

router.get('/snap2', (req, res) => {
  res.json({ success: true, message: '✅ Snap 2 test route is working!' });
});

router.get('/snap3', (req, res) => {
  res.json({ success: true, message: '✅ Snap 3 test route is working!' });
});

// Upload an image
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  res.json({ success: true, message: 'Image uploaded successfully', filename: req.file.filename });
});

// Get all uploaded image filenames
router.get('/images', (req, res) => {
  const dir = path.join(__dirname, '..', 'uploads');
  if (!fs.existsSync(dir)) return res.json([]);
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f));
  res.json({ success: true, images: files });
});

module.exports = router;
