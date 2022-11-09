const { Router } =require( 'express');
const router= Router();
const ProductoController = require('../controllers/productsController.js') 

class RouterProducto{
    constructor(){
        this.controller= new ProductoController()
    }

    start(){
        router.get('/', this.controller.getProductos)
        router.get('/:id', this.controller.getProductoId)
        router.post('/', this.controller.postProductos)
        router.put('/:id', this.controller.putProduct)
        router.delete('/:id', this.controller.deleteProduct )

        return router
    }
}

module.exports = RouterProducto