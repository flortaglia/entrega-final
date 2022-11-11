const OrdenesDTO = require("../classes/Ordenes/orderDTO.class.js")  ;
const CustomError = require ("../classes/CustomError.class.js") ;
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Ordenes = require ("../models/order.model.js")

let instance

class OrdenesDaoMongo extends DAO {
    constructor() {
      super();
      this.collection = Ordenes;
      this.db = MongoClient.getInstance();
    }
    async deleteById(id){
        try {
            await this.collection.deleteOne({_id:id});
        } catch (error) {
            throw new CustomError(500, error); 
        }
    }
    async getById(id)  {
        try {
            const doc = await this.collection.findOne({ _id: id }, { __V: 0 });
            return doc;
        } catch (error) {
            throw new CustomError(500, error); 
        } 
    }
    async getAll(){
        try {
            const doc = await this.collection.find({ });
            return doc;
        } catch (error) {
            throw new CustomError(500, error); 
        }
    }
    async nextOrderNumber(){
        const lastOrder = await this.collection.findOne({}).sort({orderNumber:-1})
        if (!lastOrder) {
            return 1
        }   
        return lastOrder.orderNumber + 1
    }
    async create(carrito){
        try {
            console.log('carrito.productos', carrito.productos)
            const doc = new this.collection({
                orderNumber:await this.nextOrderNumber(),
                username:carrito.username,
                address:carrito.address,
                productos: carrito.productos, 
                timestamp:Date.now(),
                status:"generada",
                productos: carrito.productos,
            })
            await doc.save() 
            return doc
        } catch (error) {
            throw new CustomError(500, error); 
        }       
    }
    async getByusername(username){ 
        try {
            const doc = await this.collection.findOne({ username: username});
            return doc;
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    

    ////cambiar tomar de producto los datosssssss/////ordenes?????????????????
    // async cartCheckoutService(user){
    //     try {
    //         let carrito = await this.getByusername(user.username)  
    //         const productos = carrito.productos
    //         const message= carrito.productos.map(producto=>
    //             `PRODUCTO: ${producto.title} PRECIO UNIT.: ${producto.price} CANTIDAD: ${producto.cantidad}`  
    //         )
    //         await this.deleteById(carrito._id)
    //         return productos ///a donde va 
    //     } catch (error) {
    //         throw new CustomError(500, error);
    //     }
    // }

    static getInstance() {
  
        if (!instance) instance = new OrdenesDaoMongo();
        return instance;
    }
}


module.exports = OrdenesDaoMongo
