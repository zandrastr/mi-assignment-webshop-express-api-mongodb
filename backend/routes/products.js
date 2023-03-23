var express = require('express');
var router = express.Router();
const ProductModel = require("../models/product-model");

// ****************************** PRODUCTS ******************************
// HÄMTA ALLA PRODUKTER

/* GET products listing. */
router.get('/', async(req, res, next) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } 
    catch(error) {
        console.error(error, "Something went wrong, could not get products listing.");
    }
})

// ****************************** PRODUCTS/ID ***************************
// HÄMTA SPECIFIK PRODUKT
// GET


// ****************************** PRODUCTS/ADD **************************
// SKAPA PRODUKT

router.post('/add', async(req, res, next) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } 
    catch(error) {
        console.error(error, "Something went wrong, could not add product.");
    }
})

module.exports = router;
