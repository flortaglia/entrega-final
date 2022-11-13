const { Router } =require( 'express');
const router= Router();
const CarritoController = require('../controllers/cartController.js') 

class RouterCarrito{
    constructor(){
        this.controller= new CarritoController()
    }

    start(){
        router.get('/productos/:id', this.controller.addProduct);
      
        router.get('/deleteproducto/:id', this.controller.deleteProductFromCart)
        router.get('/', this.controller.getUserCart)
        router.get('/checkout', this.controller.cartCheckout)

        return router
    }
}

module.exports = RouterCarrito

// router.get('/productos', mostrarForm) 

// router.post('/carrito', postCarrito) 
// router.delete('/carrito/:id', deleteCarrito )
// router.get('/carrito', listarCarritos)
// router.get('/carrito/:id/productos', verCarrito)
// router.delete('/carrito/deleteproducto', deleteProductFromCart) xq x ahora uso link



