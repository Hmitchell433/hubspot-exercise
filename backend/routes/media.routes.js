const express = require("express");
const asyncHandler = require("express-async-handler");
const MediaController = require("../controllers/media.controller");

const router = express.Router();

router.get("/", asyncHandler(MediaController.getMovies));

router.get("/filter-values", asyncHandler(MediaController.getFilterValues));

module.exports = router;
