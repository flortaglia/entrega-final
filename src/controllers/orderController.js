const OrdenesDaoFactory = require ('../classes/Ordenes/OrderDaoFactory.class.js') 
const DAO = OrdenesDaoFactory.getDao()

class OrdenesController{
    async getOrdenes(req, res){
        try {
            const verOrdenes = await DAO.getAll()
            // res.render('ordenes.hbs',{verOrdenes})
            res.status(200).json(verOrdenes)
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
    async getOrdersByMail(req, res){ 
        try {
            const username = req.user.username
            let verOrden = await DAO.getByusername(username)
            res.status(200).json(verOrden)
            // res.render('cart.hbs',{productos})
        } catch (error) {  
            res.status(error.errorCode).send(error.message);
        }
    
    }
}
module.exports = OrdenesController;