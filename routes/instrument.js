var express = require('express');
var instrument_controller = require('../controllers/instrument');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('instrument', { title: 'Search Results' });
// });

router.get('/', instrument_controller.instrument_view_all_Page);
/* GET detail costume page */
router.get('/detail', instrument_controller.instrument_view_one_Page);

module.exports = router;
