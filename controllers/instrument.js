var instrument = require("../models/instrument");
// List of all instrument
// List of all instruments
exports.instrument_list = async function(req, res) {
try{
theinstruments = await instrument.find();
console.log("theinstruments",theinstruments);
res.send(theinstruments);
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

// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function(req, res) {
    try{
    theinstruments = await instrument.find();
    res.render('instrument', { title: 'instrument Search results', results: theinstruments });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


        // Handle Costume create on POST.
exports.instrument_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instrument();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.product_type = req.body.product_type;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    