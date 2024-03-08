const express = require("express");

const { paginate } = require("../utils/paginate");
const { applyFilters } = require("../utils/filters");
const { http } = require("../utils/http");
const { PER_PAGE } = require("../constants");

const router = express.Router();

router.get("/", async (req, res) => {
  const { search, genre, year, type, page, per_page = PER_PAGE } = req.query;
  try {
    let {
      data: { media: movies },
    } = await http.get();

    movies = applyFilters(movies, {
      search,
      genre,
      year,
      type,
    });

    const totalPages = Math.ceil(movies.length / per_page);
    movies = paginate(movies, page, per_page);

    const jsonData = {
      movies,
      totalPages,
    };

    res.status(200).json(jsonData);
  } catch (error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/filter-values", async (_, res) => {
  try {
    let {
      data: { media: movies },
    } = await http.get();

    const genres = movies
      .reduce((acc, movie) => {
        movie.genre.forEach((genre) => {
          if (!acc.includes(genre)) {
            acc.push(genre);
          }
        });
        return acc;
      }, [])
      .sort();

    const years = movies
      .reduce((acc, movie) => {
        if (!acc.includes(movie.year)) {
          acc.push(movie.year);
        }

        return acc;
      }, [])
      .sort();

    res.status(200).json({ genres, years });
  } catch (error) {
    console.error(`Error fetching filter values `, error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
