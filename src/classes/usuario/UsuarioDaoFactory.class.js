const UsuarioDaoMongo = require("../../service/usuario.dao.mongo.js") ;
const CustomError = require ("../CustomError.class.js") ;

class UsuarioDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return UsuarioDaoMongo.getInstance();
    if (process.argv[2] === "undefined") throw new CustomError(500, "Falta implementar la db al inicializar")
  }
}

module.exports = UsuarioDaoFactory;