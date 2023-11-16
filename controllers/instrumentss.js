var monitor = require('../models/instrument');
 
exports.instrument_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await monitor.findById( req.query.id)
    res.render('instrumentdetail',
    { title: 'Instruments Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
 
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.instrument_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('instrumentcreate', { title: 'Instrument Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
 
    // query provides the id
exports.instrument_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await monitor.findById(req.query.id)
    res.render('instrumentupdate', { title: 'Monitor Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
 
    // Handle a delete one view with id from query
exports.instrument_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await monitor.findById(req.query.id)
    res.render('instrumentdelete', { title: 'Instrument Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
   
   