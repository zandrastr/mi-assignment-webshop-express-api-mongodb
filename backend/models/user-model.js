const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,       
    orders: {
        type: [mongoose.Types.ObjectId],
        ref: 'Order'
    }
})

module.exports = mongoose.model("User", UserSchema);