const { Router } =require( 'express');
const router= Router();
const UsuarioControllerRest = require('../controllers/usersControllerRest.js') 
const UsuarioMiddleware = require('./user.middleware.js')
const userMiddlewares= new UsuarioMiddleware()

class RouterUsuarioRest{
    constructor(){
        this.controller= new UsuarioControllerRest()
    }

    start(){
        router.get('/',userMiddlewares.authMiddleware,userMiddlewares.isAdminMiddleware, this.controller.getUsuarios)
        router.get('/:id',userMiddlewares.authMiddleware, this.controller.getUsuarioId)
        router.post('/',userMiddlewares.authMiddleware, this.controller.postUsuarios)
        router.put('/:id',userMiddlewares.authMiddleware,userMiddlewares.isAdminMiddleware, this.controller.putUsuario)
        router.delete('/:id',userMiddlewares.authMiddleware,userMiddlewares.isAdminMiddleware, this.controller.deleteUsuario)

        return router
    }
}

module.exports = RouterUsuarioRest