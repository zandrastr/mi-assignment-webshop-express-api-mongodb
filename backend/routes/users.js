var express = require('express');
var router = express.Router();

// ****************************** USERS ******************************
// HÄMTA ALLA USERS
// SKICKA INTE MED LÖSENORD // BARA ID, NAMN + EMAIL PÅ ALLA USERS
// GET

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users listing.');
});


// ****************************** USERS/ID ***************************
// HÄMTA SPECIFIK USER // SKICKA HELA OBJEKTET
// GET


// ****************************** USERS/ADD **************************
// SKAPA USER
// POST


// ****************************** USERS/LOGIN ************************
// LOGGA IN USER
// POST


module.exports = router;

