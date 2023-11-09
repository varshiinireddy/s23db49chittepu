var instrument = require('../models/instrument');
// // List of all instrument
exports.instrument_list = async function(req, res) {
    try{
    theinstrument= await instrument.find();
    res.send(theinstrument);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function(req, res) {
    try{
        instrument = await instrument.find();
    res.render('instrument', { title: 'instrument Search Results', results: instrument });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific instrument.
exports.instrument_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument detail: ' + req.params.id);
};
// Handle instrument create on POST.
exports.instrument_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument create POST');
};
// Handle instrument delete form on DELETE.
exports.instrument_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument delete DELETE ' + req.params.id);
};
// Handle instrument update form on PUT.
exports.instrument_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument update PUT' + req.params.id);
};