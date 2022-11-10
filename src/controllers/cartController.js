const main = require('../nodemailer/mailAdmin.js')
// const {addProductService, getUserCartService,cartCheckoutService,
//     deleteProductFromCartService } = require ('../service/carrito.dao.mongo.js')
const CarritoDaoFactory = require ('../classes/carrito/CarritoDaoFactory.class.js') 
const DAO = CarritoDaoFactory.getDao()

class CarritoController{

    async addProduct(req,res){
        try {
            const cantidad= req.body.cant || 1
            const id_prod=req.params.id
            const username = req.user.username
            await DAO.addProductService(cantidad,id_prod,username)
            res.redirect('/api/productos')
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
                const productos = carrito.productos 
                res.render('cart.hbs',{productos})
            }
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
    sendOrderEmail(user, body){
        try {
            main(`Nuevo Pedido de ${user.name} - ${user.username}`, body) 
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
    async cartCheckout(req, res){  
        try {
            let user= req.user
            let productos = await DAO.cartCheckoutService(user)
            res.render('mail.hbs',{productos,layout: null}, (error, html) => {
                sendOrderEmail(req.user, html)
            })
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
            res.redirect('/api/cart') 
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
