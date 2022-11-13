const { Router } =require( 'express');
const router= Router();
const ConfigController = require('../controllers/configDatosController.js') 

class RouterConfig{
    constructor(){
        this.controller= new ConfigController()
    }

    start(){
        router.get('/datosConfiguracion', this.controller.getDatos);
        return router
    }
}

module.exports = RouterConfig