const ChatDaoFactory = require ('../classes/chat/ChatDaoFactory.class.js') 
const DAO = ChatDaoFactory.getDao()

class ChatController{
    async getChatsByUsername(req, res){
        try {
            const username = req.params.mail
            const verChats = await DAO.getByUsername(username)
            if(!verChats){return res.status(404).json({error: "No existen chats"})}
            res.render('chats.hbs',{verChats})
            // res.status(200).json(verChats)
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
}
module.exports = ChatController;