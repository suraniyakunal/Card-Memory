const express = require('express');
const { saveGameData } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);

module.exports = router;
