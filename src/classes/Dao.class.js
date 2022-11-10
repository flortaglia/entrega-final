const CustomError = require ("./CustomError.class.js") ;

class DAO {
  async getAll() {
    throw new CustomError(500, "Falta implementar getAll en sub clase");
  }

  async getById() {
    throw new CustomError(500, "Falta implementar getById en sub clase");
  }
  async getByUsername() {
    throw new CustomError(500, "Falta implementar getByUsername en sub clase");
  }
  async getByCategory() {
    throw new CustomError(500, "Falta implementar getByCategory en sub clase");
  }
  async create() {
    throw new CustomError(500, "Falta implementar create en sub clase");
  }

  async update() {
    throw new CustomError(500, "Falta implementar update en sub clase");
  }

  async deleteById() {
    throw new CustomError(500, "Falta implementar deleteById en sub clase");
  }

}

module.exports = DAO;