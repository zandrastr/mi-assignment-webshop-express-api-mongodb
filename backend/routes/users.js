var express = require('express');
var router = express.Router();
const UserModel = require("../models/user-model");

// ****************************** USERS ******************************
// HÄMTA ALLA USERS
// SKICKA INTE MED LÖSENORD // BARA ID, NAMN + EMAIL PÅ ALLA USERS

/* GET users listing. */
router.get('/', async(req, res, next) => {
  try {
    const users = await UserModel.find().select({"name":1,  "email":1});
    res.status(200).json(users)
  }
  catch(error) {
    console.error(error, "Could not get users listing.");
  }
});

// ****************************** USERS/ID ***************************
// HÄMTA SPECIFIK USER 
// SKICKA HELA OBJEKTET

router.post('/', async(req, res, next) => {
  try {
    const user = await UserModel.findById(req.body.id);
    res.status(200).json(user);
  }
  catch(error) {
    console.error(error, "The user was not found.");
  }
});

// ****************************** USERS/ADD **************************
// SKAPA USER

router.post('/add', async(req, res, next) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  }
  catch(error) {
    console.error(error, "Something went wrong, could not create user.");
  }
});

// ****************************** USERS/LOGIN ************************
// LOGGA IN USER

router.post('/login', async(req, res, next) => {
  
  try {
    const {email, password} = req.body;
    let foundUser = await UserModel.findOne({ email });

    if(foundUser && foundUser.password === password) {
      res.status(201).json({email: foundUser.email, name: foundUser.name, id: foundUser._id})
    } else {
    console.error("User not found or password incorrect.");
    }
  }
  catch(error) {
    console.error(error, "Something went wrong, could not login.");
  }    
})
  
module.exports = router;
  
    