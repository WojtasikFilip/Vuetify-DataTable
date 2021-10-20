const db = require('../db/index.js');

async function getMovies() {
  const { rows } = await db.query('Select * from movies');
  return {
    data: rows,
    code: 200,
  };
}

module.exports = { getMovies };
