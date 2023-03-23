var express = require('express');
var router = express.Router();
const ProductModel = require("../models/product-model");

// ****************************** PRODUCTS ******************************
// HÄMTA ALLA PRODUKTER
// GET

/* GET products listing. */
router.get('/', function(req, res, next) {
    res.send('Products listing.');
});


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
