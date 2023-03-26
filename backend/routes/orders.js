var express = require('express');
var router = express.Router();
const OrderModel = require('../models/order-model');
const ProductModel = require('../models/product-model');
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
        const {user, products} = req.body;
        const createdOrder = await OrderModel.create(req.body)

        //find user
        //add orderId to user.orders
        const foundUser = await UserModel.findByIdAndUpdate(user, {$push:{orders: createdOrder._id}}, {new: true})
        
        //loop to update each product in order
        products.forEach(async item => {

            //find product
            const foundProduct = await ProductModel.findById(item.productId)
            const productId = foundProduct._id;

            //update lager property in product
            const currentLagerAmount = foundProduct.lager;
            const updatedProduct = await ProductModel.findByIdAndUpdate(productId, {$set:{lager: (currentLagerAmount - item.quantity)}}, {new: true} )            
        })
        res.status(201).json(createdOrder)
    } 
    catch(error) {
        console.error(error, "Something went wrong, could not create order.");
    }
})

module.exports = router;
