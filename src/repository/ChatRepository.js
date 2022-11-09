const BaseRepository = require ("./BaseRepository") ;

class ChatRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
  }
}

module.exports = ChatRepository;