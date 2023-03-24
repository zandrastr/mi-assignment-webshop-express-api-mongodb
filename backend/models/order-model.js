const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model("Order", OrderSchema);

