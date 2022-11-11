const main = require('../nodemailer/mailAdmin.js')
// const {addProductService, getUserCartService,cartCheckoutService,
//     deleteProductFromCartService } = require ('../service/carrito.dao.mongo.js')
const CarritoDaoFactory = require ('../classes/carrito/CarritoDaoFactory.class.js') 
const DAO = CarritoDaoFactory.getDao()
const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const DAOProduct = ProductoDaoFactory.getDao()

class CarritoController{

    async addProduct(req,res){
        try {
            const cantidad= req.body.cant || 1
            const id_prod=req.params.id
            const username = req.user.username
            const address = req.user.address
            await DAO.addProductService(cantidad,id_prod,username, address)
            res.redirect('/productos')
            //res.json(carrito)
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
        
    }
    async getUserCart(req, res){ 
        try {
            const username = req.user.username
            let carrito = await DAO.getUserCartService(username)

            if(!carrito){
                res.render('cart.hbs', false)
            }else{
                
              
                for (let index = 0; index < carrito.productos.length; index++) {
                    let productosCarrito =JSON.parse(
                        JSON.stringify(await DAOProduct.getById(carrito.productos[index]._id ))
                    )
                    console.log('productosCarrito',productosCarrito)  
                    if (productosCarrito.price !== carrito.productos[index].price ) {
                        carrito.productos[index].price=productosCarrito.price
                       
                    }    
                }
                await DAO.update(carrito._id,carrito.productos)
                const productos = carrito.productos
                res.render('cart.hbs',{productos})
            }
        } catch (error) {  
            res.status(error.errorCode).send(error.message);
        }
    }
    async sendOrderEmail(user, body){   
        try {
            console.log('holaa soy sendorder')
           await  main(`Nuevo Pedido de ${user.name} - ${user.username}`, body) 
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
    async cartCheckout(req, res){  
        try {
            let user= req.user
            console.log('user', user)
            let order = await DAO.cartCheckoutService(user)
            const productos = order.productos
            res.render('mail.hbs',{order,layout: null}, (error, html) => {
                main(`Nuevo Pedido de ${user.name} - ${user.username}`, html) 
             })
        //  this.sendOrderEmail(user, "hola")
        //  main(`Nuevo Pedido de ${user.name} - ${user.username}`, "hola") 
            res.redirect('/')
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        } 
    }
    async deleteProductFromCart(req,res){   
        try {
            const id_prod=req.params.id
            console.log('id_prod',id_prod);
            const username = req.user.username
            console.log('username',username);
            await DAO.deleteProductFromCartService(id_prod,username)
            res.redirect('/carrito') 
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        } 
        
    }
}
module.exports = CarritoController

// const postCarrito = async (req, res)=>{
//     const elemento = await CarritoDao.newCart(username)
//     res.json(elemento)
// }
// const verCarrito = async (req, res) => {
//     const id = req.params.id
//     const elemento = await CarritoDao.getById(id)
//     if(!elemento){return res.status(404).json({error: "Carrito no encontrado"})}
//     res.json(elemento)
// }
// const deleteCarrito = async (req, res) => {
//     const id = req.params.id
//     const elemento = await CarritoDao.getById(id)
//     if(!elemento){return res.status(404).json({error: "Carrito no encontrado"})}
//     await CarritoDao.deleteById(id)
//     res.json(await CarritoDao.getAll())
// }
// const listarCarritos =  async (req, res) => {
//     const verCarritos = await CarritoDao.getAll()
//     res.json(verCarritos)
// }
