const { Router } =require( 'express');
const router= Router();
const OrdenesController = require('../controllers/orderController.js') 

class RouterOrder{
    constructor(){
        this.controller= new OrdenesController()
    }
    start(){ 
        router.get('/ordenes', this.controller.getOrdersByMail)
        router.get('/allorders', this.controller.getOrdenes)
        return router  
    }
}

module.exports = RouterOrder