const mongoose = require("mongoose") ;

const carritoSchema = new mongoose.Schema({
    username: { type: String, require: true, max: 200, unique:true},
    address:{ type: String, require: true},
    timestamp: { type: Date, required: true },
    productos: {type: Array, required: true }
})

const Carritos = mongoose.model ("carritos", carritoSchema)

module.exports = Carritos