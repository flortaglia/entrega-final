const mongoose= require("mongoose") ;
const dbConfig = require('../config.js');
const CustomError = require ("./CustomError.class.js") ;
const DBClient = require("./DBClient.class.js");

class MongoClient extends DBClient {
  constructor() {
    super();
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(dbConfig.url);

      console.log("Database connected");
    } catch (err) {
      throw new CustomError(500, err);
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();

      console.log("Database disconnected");
    } catch (err) {
      throw new CustomError(500, err);
    }
  }
}

module.exports = MongoClient;