var mongoose = require('mongoose')
var ToySchema = mongoose.Schema(
    {
        name: String,
        color: String,
        quantity: Number,
        price: Number,
        description: String,
        image: String
    }
)
var ToyModel = mongoose.model("Do choi", ToySchema, "toy");
module.exports = ToyModel;