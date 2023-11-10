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
exports.instrument_detail =async  function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await instrument.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.instrument_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await instrument.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.product_type) toUpdate.product_type = req.body.product_type;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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