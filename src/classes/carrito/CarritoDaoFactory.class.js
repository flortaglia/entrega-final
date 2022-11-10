const CarritoDaoMongo = require("../../service/carrito.dao.mongo.js") ;
const CustomError = require ("../CustomError.class.js") ;

class CarritoDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return CarritoDaoMongo.getInstance();
    if (process.argv[2] === "undefined") throw new CustomError(500, "Falta implementar la db al inicializar")
  }
}

module.exports = CarritoDaoFactory;