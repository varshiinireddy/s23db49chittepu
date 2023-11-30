var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instruments_controller = require('../controllers/instrumentss');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
//router.post('/monitors', monitor_controller.monitor_create_post);
// DELETE request to delete Costume.
router.get('/detail', secured,instruments_controller.instrument_view_one_Page);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


//* GET create monitor page *
router.get('/create',secured, instruments_controller.instrument_create_Page)
//* GET create update page */
router.get('/update',secured, instruments_controller.instrument_update_Page);
/* GET delete costume page */
router.get('/delete',secured, instruments_controller.instrument_delete_Page);
 
module.exports = router;