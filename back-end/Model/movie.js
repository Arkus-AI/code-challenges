const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: String,
  overview: String,
  genres: [String],
  release_date: Date,
  runtime: Number,
  vote_average: Number
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
