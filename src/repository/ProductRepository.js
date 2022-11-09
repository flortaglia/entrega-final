const BaseRepository = require ("./BaseRepository") ;

class ProductRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
  }
}

module.exports = ProductRepository;