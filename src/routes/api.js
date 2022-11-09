const { Router } =require( 'express');
const router= Router();
const {addProduct,deleteProductFromCart,
    getUserCart, cartCheckout} = require('../controllers/cartController.js') 

//Rutas Carrito
router.get('/carrito/productos/:id', addProduct); 
router.get('/carrito/deleteproducto/:id', deleteProductFromCart)
router.get('/cart', getUserCart)
router.get('/carrito/checkout', cartCheckout)

module.exports = router 


// router.get('/productos', mostrarForm) 



// router.post('/carrito', postCarrito) 
// router.delete('/carrito/:id', deleteCarrito )
// router.get('/carrito', listarCarritos)
// router.get('/carrito/:id/productos', verCarrito)
// router.delete('/carrito/deleteproducto', deleteProductFromCart) xq x ahora uso link



