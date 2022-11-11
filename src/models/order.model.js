const mongoose = require("mongoose") ;
// const Schema = mongoose.Schema;
// const Carritos = require ("./carrito.model.js")

const ordenSchema = new mongoose.Schema({
    orderNumber:{ type: Number, require: true},
    timestamp: { type: Date, required: true },
    status:{ type: String, require: true},
    // carrito: {type:Schema.ObjectId, ref:"Carritos"}
    username: { type: String, require: true, max: 200, unique:true},
    address:{ type: String, require: true},
    productos: {type: Array, required: true },
})

const Ordenes = mongoose.model ("ordenes", ordenSchema) 

module.exports = Ordenes