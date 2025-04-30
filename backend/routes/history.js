const express = require('express');
const router = express.Router();
const GameResult = require('../models/GameResult');

// Save a new game result
router.post('/', async (req, res) => {
  try {
    const { score, timeTaken } = req.body;
    const result = new GameResult({ score, timeTaken });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error saving result' });
  }
});

// Get all results
router.get('/', async (req, res) => {
  try {
    const results = await GameResult.find().sort({ playedAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching results' });
  }
});

module.exports = router;

