const ChatDaoMongo = require("../service/chat.dao.mongo.js") ;

class ChatDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return ChatDaoMongo.getInstance();
  }
}
const obj1 = ChatDaoMongo.getInstance();
const obj2 = ChatDaoMongo.getInstance();

console.log(obj1.value === obj2.value);
module.exports = ChatDaoFactory;