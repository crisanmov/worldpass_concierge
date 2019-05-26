var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WORLDPASS CONCIERGE' });
});

//GET index hotels
router.get('/hotels', function (req, res) {
  res.render('hotels', { title: 'WP_CONCIERGE_HOTELS' });
});

//GET index insurages
router.get('/insurances', function (req, res) {
  res.render('insurances', { title: 'WP_CONCIERGE_INSURANCES' });
});

//GET cars
router.get('/cars', function (req, res) {
  res.render('cars', { title: 'WP_CONCIERGE_CARS' });
});

//GET cars
router.get('/tours', function (req, res) {
  res.render('tours', { title: 'WP_CONCIERGE_CARS' });
});

module.exports = router;
