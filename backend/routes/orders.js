var express = require('express');
var router = express.Router();

// ****************************** ORDERS/ALL ******************************
// HÄMTA ALLA ORDERS
// GET

/* GET orders listing. */
router.get('/all', function(req, res, next) {
    res.send('Orders listing.');
});


// ****************************** ORDERS/ADD ******************************
// SKAPA ORDER FÖR EN SPECIFIK USER 
// PRODUCTS ÄR EN ARRAY MOTSVARANDE INNEHÅLLET I KUNDVAGN
// POST


module.exports = router;
