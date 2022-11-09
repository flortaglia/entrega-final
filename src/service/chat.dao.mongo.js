const chatDTO = require("../classes/chatDTO.class.js")  ;
const CustomError = require ("../classes/CustomError.class.js") ;
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Chats = require ("../models/chat.model.mongo.js")


class ChatDaoMongo extends DAO {
  constructor() {
    super();
    this.collection = Chats;
    this.db = new MongoClient();
  }

  async deleteById(id){
    try {
      // await this.db.connect();
      await this.collection.deleteOne({_id:id});
    } catch (error) {
      throw new CustomError(500, error);
    }//finally {
    //   await this.db.disconnect();
    // }
      
  }
  async getById(id)  {
    try {
      // await this.db.connect();
      const chat = await this.collection.findOne({ _id: id }, { __V: 0 });
      return new chatDTO(chat);
    } catch (error) {
      throw new CustomError(500, error);
    }//finally {
    //   await this.db.disconnect();
    // }
  
  }
  async getAll(){
    try {
      // await this.db.connect();
      const chats = await this.collection.find({ });
      
      return chats.map((chat)=>new chatDTO(chat));
    } catch (error) {
      throw new CustomError(500, error);
    }//finally {
    //   await this.db.disconnect();
    // }
  
  }
  async create(messagechat){
    try {
      // await this.db.connect();
      const chat = new this.collection(messagechat)
      // { mail,name,surname,age,alias,avatar,message, tiempochat}
      await chat.save() 
      
      return new chatDTO(chat)
    } catch (error) {
      throw new CustomError(500, error);
    }//finally {
    //   await this.db.disconnect();
    // }
               
  }

  async update(id, mail,nombre,apellido,edad,alias,avatar,message, tiempochat){
    try {
      // await this.db.connect();
      await this.collection.updateOne({_id:id}, {mail,nombre,apellido,edad,alias,avatar,message, tiempochat})   
      const chat = await this.getById(id) 
       
      return new chatDTO(chat)
    } catch (error) {
      throw new CustomError(500, error);
    }//finally {
    //   await this.db.disconnect();
    // } 
    
  }

  static getInstance() {
    let instance
    if (!instance) instance = new ChatDaoMongo();

    return instance;
  }
  
}

module.exports = ChatDaoMongo;

