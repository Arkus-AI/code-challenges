const Movie = require('../Model/movie');

exports.getallmovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.createMovie = async (req, res) => {
  try {
    const { title, overview, genres, release_date, runtime, vote_average } = req.body;
    const newMovie = new Movie({
      title,
      overview,
      genres,
      release_date,
      runtime,
      vote_average
    });
    await newMovie.save();
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Error creating movie', error: error.message });
  }
};
exports.getbyid = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the movie' });
  }
};
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Movie updated successfully', movie: updatedMovie });
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error: error.message });
  }
};
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error: error.message });
  }
};
exports.moviesList = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  try {
    const count = await Movie.countDocuments();
    const totalPages = Math.ceil(count / limit);
    const movies = await Movie.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({
      movies,
      page,
      totalPages,
      totalMovies: count,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};
exports.searchbytitle = async (req, res) => {
  const { title } = req.params;
  try {
    const movies = await Movie.find({ title: { $regex: title, $options: 'i' } });
    if (movies.length === 0) {
      return res.status(404).json({ error: 'No movies found' });
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search movies' });
  }
};
exports.sort = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const sortBy = req.query.sortBy || 'title'; // Default sorting by title
  const sortOptions = {};
  if (sortBy === 'title' || sortBy === 'release_date') {
    sortOptions[sortBy] = 1; // Sort in ascending order
  } else {
    return res.status(400).json({ error: 'Invalid sort parameter' });
  }
  try {
    const count = await Movie.countDocuments();
    const totalPages = Math.ceil(count / limit);
    const movies = await Movie.find()
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({
      movies,
      page,
      totalPages,
      totalMovies: count,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};