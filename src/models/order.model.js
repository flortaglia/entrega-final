const mongoose = require("mongoose") ;

const ordenSchema = new mongoose.Schema({
    idIncremental:{ type: Number, require: true},
    username: { type: String, require: true, max: 200, unique:true},
    address:{ type: String, require: true},
    timestamp: { type: Date, required: true },
    state:{ type: String, require: true},
    productos: {type: Array, required: true },

})

const Ordenes = mongoose.model ("ordenes", ordenSchema)

module.exports = Ordenes