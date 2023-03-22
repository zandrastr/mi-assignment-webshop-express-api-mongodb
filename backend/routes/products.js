var express = require('express');
var router = express.Router();

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
// POST


module.exports = router;
