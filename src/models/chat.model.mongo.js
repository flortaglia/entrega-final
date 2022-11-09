const mongoose = require("mongoose") ;

const chatSchema = new mongoose.Schema({
  mail: { type: String, require: true, max: 200 },
  name: { type: String, require: true, max: 200 },
  surname:{ type: String, require: true},
  age:{ type: Number, require: true},
  alias:{ type: String, require: true },
  avatar:{ type: String, require: true },
  message:{ type: String, require: true},
  tiempochat:{ type: String, require: true},
})

const Chats = mongoose.model ("chats", chatSchema)

module.exports = Chats

