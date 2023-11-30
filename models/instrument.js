const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
name: String,
product_type: {type: String, required: [true, "Product_type is required"]},
price:{ type: Number, min: [100,"Mininum price should be 10"], max: [3000,"maximum price should be 30"]}
})
module.exports = mongoose.model("instrument",instrumentSchema)