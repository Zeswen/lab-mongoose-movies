const express = require('express');

const router  = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(err => next(err));
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', { movie }))
    .catch(err => next(err));
});

module.exports = router;