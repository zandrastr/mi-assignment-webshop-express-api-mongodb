const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    lager: Number,
    quantity: Number
})

module.exports = mongoose.model("Product", ProductSchema);