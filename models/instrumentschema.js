const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
name: String,
product_type: String,
price: Number,
})
module.exports = mongoose.model("instrument",instrumentSchema)