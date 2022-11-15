const ChatDaoFactory = require ('../classes/chat/ChatDaoFactory.class.js') 
const DAO = ChatDaoFactory.getDao()
const path = require( 'path')

class ChatController{
    async getChatsByMail(req, res){
        try {
            const username = req.params.mail
            console.log('ChatController username',username)
            const verChats = await DAO.getByUsername(username)
            if(!verChats){return res.status(404).json({error: "No existen chats"})}
            // res.render('chats.hbs',{verChats})
            res.status(200).json(verChats)
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
    async getChat(req,res){
        const username = req.params.mail
        // res.render('chats.hbs');
        res.sendFile(path.join(__dirname, ".././public/chat.html"));     
    }
}
module.exports = ChatController;