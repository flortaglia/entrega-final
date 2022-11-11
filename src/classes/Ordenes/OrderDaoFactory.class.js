const OrdenesDaoMongo = require("../../service/ordenes.dao.mongo.js") ;
const CustomError = require ("../CustomError.class.js") ;

class OrdenesDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return OrdenesDaoMongo.getInstance();
    if (process.argv[2] === "undefined") throw new CustomError(500, "Falta implementar la db al inicializar")
  }
}

module.exports = OrdenesDaoFactory;