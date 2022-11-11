// const {CarritoDao} = require ('../daos/index.js') 
const CarritoDTO = require("../classes/carrito/CarritoDTO.class.js")  ;
const CustomError = require ("../classes/CustomError.class.js") ;
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Carritos = require ("../models/carrito.model.js")

const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const DAOProduct = ProductoDaoFactory.getDao()
const OrdenesDaoFactory = require ('../classes/Ordenes/OrderDaoFactory.class.js') 
const DAOorder = OrdenesDaoFactory.getDao()
let instance

class CarritoDaoMongo extends DAO {
    constructor() {
      super();
      this.collection = Carritos;
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
    async create(username, address){ 
        try {
            const doc = new this.collection({username:username,address:address, timestamp:Date.now(), productos:[]})
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
    async update(id,productos){  
        try {
            await this.collection.updateOne({_id:id}, {productos})   
            const elemento = await this.getById(id)  
            return elemento
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    async addProductService(cantidad,id_prod,username,address){
        try {
            let carrito = await this.getByusername(username)
            if(!carrito) { carrito= await this.create(username, address)}
            // carrito.productos.map( (prod)=> console.log('prod.id',prod._id))
            const indice = carrito.productos.findIndex( (prod)=> prod._id === id_prod)
            // console.log(indice)
            if(indice >= 0){
                carrito.productos[indice].cantidad += cantidad
            }else{
                let producto = JSON.stringify(await DAOProduct.getById(id_prod))
                const productos2 = JSON.parse(producto)
                const productoCantidad= carrito.productos.push({...productos2,cantidad})
                // console.log('new CarritoDTO(productoCantidad)',new CarritoDTO(productoCantidad))

                // carrito.productos.push({
                //     _id:producto._id,
                //     title:producto.title,///////////////////////////////////////////////////vrer 10/11
                //     // price:producto.price,
                //     cantidad
                // })
                
            }
            carrito = await this.update(carrito._id,carrito.productos)
           
        } catch (error) {
            throw new CustomError(500, error);  
        }
    }

    async getUserCartService(username){ 
        try {
            let carrito = await this.getByusername(username)
            
            return carrito 
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    ////cambiar tomar de producto los datosssssss/////ordenes?????????????????
    async cartCheckoutService(user){
        try {
            let carrito = await this.getByusername(user.username)  
            let order = await DAOorder.create(carrito)
            const productos = carrito.productos
            const message= carrito.productos.map(producto=>
                `PRODUCTO: ${producto.title} PRECIO UNIT.: ${producto.price} CANTIDAD: ${producto.cantidad}`  
            )
          
            const recibido = `El Pedido se encuentra en proceso. Gracias por su compra`
      
            await this.deleteById(carrito._id)
            return order 
        } catch (error) {
            throw new CustomError(500, error);
        }
    }

    async deleteProductFromCartService(id_prod,username){
        try {
            let carrito = await this.getByusername(username)
            if(!carrito) { 
                throw 'carrito no existe' 
            }
            carrito.productos = carrito.productos.filter((prod)=>prod._id !== id_prod)
            carrito = await this.update(carrito._id,carrito.productos)
        } catch (error) {
            throw new CustomError(500, error);
        }
    }

    static getInstance() {
  
        if (!instance) instance = new CarritoDaoMongo();
        return instance;
    }
}


module.exports = CarritoDaoMongo

// {
//     addProductService,
//     getUserCartService,
//     deleteProductFromCartService,
//     cartCheckoutService

// }