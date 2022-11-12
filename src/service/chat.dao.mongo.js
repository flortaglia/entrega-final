const chatDTO = require("../classes/chat/chatDTO.class.js")  ;
const CustomError = require ("../classes/CustomError.class.js") ;
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Chats = require ("../models/chat.model.mongo.js")
let instance

class ChatDaoMongo extends DAO {
  constructor() {
    super();
    this.collection = Chats;
    this.db = MongoClient.getInstance();
  }

  async deleteById(id){
    try {
      await this.collection.deleteOne({_id:id});
    } catch (error) {
      throw new CustomError(500, error);
    }   
  }
 
  async getById(id)  {
    try {
      const chat = await this.collection.findOne({ _id: id }, { __V: 0 });
      return new chatDTO(chat);
    } catch (error) {
      throw new CustomError(500, error);
    }
  }

  async getAll(){
    try {
      const chats = await this.collection.find({ });
      return chats.map((chat)=>new chatDTO(chat));
    } catch (error) {
      throw new CustomError(500, error);
    }
  }

  async create(messagechat){
    try {
      const chat = new this.collection(messagechat)
      // { mail,type, tiempochat,message}
      await chat.save() 
      return new chatDTO(chat)
    } catch (error) {
      throw new CustomError(500, error);
    }           
  }

  async update(id, mail,type, tiempochat,message){
    try {
      await this.collection.updateOne({_id:id}, {mail,type, tiempochat,message})   
      const chat = await this.getById(id)  
      return new chatDTO(chat)
    } catch (error) {
      throw new CustomError(500, error);
    }
  }

  async getByUsername(username) {
    try {
      const chats = await this.collection.findOne({ username: username});
      return chats.map((chat)=>new chatDTO(chat));
    } catch (error) {
      throw new CustomError(500, error);
    }
  }

  static getInstance() {
    if (!instance) instance = new ChatDaoMongo();
    return instance;
  }
  
}

module.exports = ChatDaoMongo;

