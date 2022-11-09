const mongoose = require("mongoose") ;

const usuarioSchema = new mongoose.Schema({
    username: { type: String, require: true, max: 200, unique:true},
    password: { type: String, require: true, max: 200 },
    name:{ type: String, require: true},
    surname:{ type: String, require: true},
    address:{ type: String, require: true},
    phone:{ type: String, require: true },
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
