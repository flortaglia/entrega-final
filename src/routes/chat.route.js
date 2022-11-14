const { Router } =require( 'express');
const router= Router();
const ChatController = require('../controllers/chatController.js') 

class RouterChat{
    constructor(){
        this.controller= new ChatController()
    }
    start(){ 
        router.get('/chat/:mail', this.controller.getChatsByMail)
        router.get('/chat', this.controller.getChat)
        return router
    }
}

module.exports = RouterChat