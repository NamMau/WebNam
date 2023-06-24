var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    name: String,
    color: String,
    quantity: Number,
    price: Number,
    description: String,
    image: String
})

mongoose.model('Order', orderSchema);
