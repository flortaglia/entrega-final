class BaseRepository {

    constructor(dao) {
      this.dao = dao;
    }
  
    async getAll() {
      return await this.dao.getAll();
    }
  
    async create(newEntity) {
      return await this.dao.create(newEntity);
    }
  
    async update(id, updateData) {
        return await this.dao.update(id, updateData);
    }
  
    async deleteById(id) {
        await this.dao.deleteById(id);
        return true;
    }
    async getById(id) {
        return await this.dao.getById(id);
    }

  }
  
  module.exports = BaseRepository;