const mongoose = require('mongoose');

const GameResultSchema = new mongoose.Schema({
  score: Number,
  timeTaken: Number,
  playedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('GameResult', GameResultSchema);

