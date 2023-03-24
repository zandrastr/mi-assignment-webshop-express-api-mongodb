var express = require('express');
var router = express.Router();
const OrderModel = require('../models/order-model');
const UserModel = require('../models/user-model');

// ****************************** ORDERS/ALL ******************************
// HÄMTA ALLA ORDERS

/* GET orders listing. */
router.get('/all', async(req, res, next) => {
    try {
        const orders = await OrderModel.find()
        res.status(200).json(orders)    
    } 
    catch(error) {
        console.error(error, "Something went wrong, could not get orders listing.");
    }
})


// ****************************** ORDERS/ADD ******************************
// SKAPA ORDER FÖR EN SPECIFIK USER 
// PRODUCTS ÄR EN ARRAY MOTSVARANDE INNEHÅLLET I KUNDVAGN

router.post('/add', async(req, res, next) => {
    try {
        const order = await OrderModel.create(req.body)

        //find user
        //add orderId to user.orders
        const foundUser = await UserModel.findByIdAndUpdate(req.body.user, {$push:{orders: order._id}}, {new: true})
        
        res.status(201).json(order)
    } 
    catch(error) {
        console.error(error, "Something went wrong, could not create order.");
    }
})

module.exports = router;
