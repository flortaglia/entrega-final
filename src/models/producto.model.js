const mongoose = require("mongoose") ;

const productoSchema = new mongoose.Schema({
  title: { type: String, require: true, max: 200 },
  category: { type: String, require: true, max: 200 },
  description: { type: String, require: true, max: 200 },
  price:{ type: Number, require: true},
  thumbnail:{ type: String, require: true },
  stock:{ type: Number, require: true}
})

const Productos = mongoose.model ("productos", productoSchema)

module.exports = Productos