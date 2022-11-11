const ChatDaoMongo = require("../../service/chat.dao.mongo.js") ;

class ChatDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return ChatDaoMongo.getInstance();
  }
}

module.exports = ChatDaoFactory;