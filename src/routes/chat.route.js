const { Router } =require( 'express');
const router= Router();
const ChatController = require('../controllers/chatController.js') 

class RouterChat{
    constructor(){
        this.controller= new ChatController()
    }
    start(){ 
        router.get('/chat/email', this.controller.getChatsByUsername)
        return router
    }
}

module.exports = RouterChat