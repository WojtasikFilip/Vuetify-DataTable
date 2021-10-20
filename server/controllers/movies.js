const asyncHandler = require('express-async-handler');
const movieFunctions = require('../model/movies');

const getMovies = asyncHandler(async (req, res) => {
  const { code, data } = await movieFunctions.getMovies();
  res.status(code).json(data);
});

module.exports = { getMovies };
