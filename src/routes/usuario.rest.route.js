const { Router } =require( 'express');
const router= Router();
const UsuarioControllerRest = require('../controllers/usersControllerRest.js') 

class RouterUsuarioRest{
    constructor(){
        this.controller= new UsuarioControllerRest()
    }

    start(){
        router.get('/', this.controller.getUsuarios)
        router.get('/:id', this.controller.getUsuarioId)
        router.post('/', this.controller.postUsuarios)
        router.put('/:id', this.controller.putUsuario)
        router.delete('/:id', this.controller.deleteUsuario)

        return router
    }
}

module.exports = RouterUsuarioRest