const mongoose = require("mongoose") ;

const usuarioSchema = new mongoose.Schema({
    username: { type: String, require: true, max: 200, unique:true},
    password: { type: String, require: true, max: 200 },
    nombre:{ type: String, require: true},
    apellido:{ type: String, require: true},
    direccion:{ type: String, require: true},
    telefono:{ type: String, require: true },
    avatar:{ type: String, require: true}
})

const Usuarios = mongoose.model ("usuarios", usuarioSchema)

module.exports = Usuarios

// const mongoose = require( "mongoose")

// module.exports = mongoose.model('User', {
//     username: String,
//     password:String,
//     name : String,
//     address : String,
//     age : Number,
//     phone:Number,
//     avatar: String 
  
// })
