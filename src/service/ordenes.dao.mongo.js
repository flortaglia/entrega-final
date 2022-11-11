const OrdenesDTO = require("../classes/Ordenes/orderDTO.class.js")  ;
const CustomError = require ("../classes/CustomError.class.js") ;
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Ordenes = require ("../models/order.model.js")

const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const DAOProduct = ProductoDaoFactory.getDao()
let instance

class OrdenesDaoMongo extends DAO {
    constructor() {
      super();
      this.collection = Ordenes;
      this.db = new MongoClient();
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
    async getByusername(username){ 
        try {
            const doc = await this.collection.findOne({ username: username});
            return doc;
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    
    async create(username, address){ //////////
        try {
            const doc = new this.collection({username:username,address:address, timestamp:Date.now(), productos:[]})
            await doc.save() 
            return doc
        } catch (error) {
            throw new CustomError(500, error); 
        }       
    }

    async update(id,productos){  //////////
        try {
            await this.collection.updateOne({_id:id}, {productos})   
            const elemento = await this.getById(id)  
            return elemento
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    async addProductService(cantidad,id_prod,username,address){///////////
        try {
            let carrito = await this.getByusername(username)
            if(!carrito) { carrito= await this.create(username, address)}
            carrito.productos.map( (prod)=> console.log('prod.id',prod._id))
            const indice = carrito.productos.findIndex( (prod)=> prod._id === id_prod)
            console.log(indice)
            if(indice >= 0){
                carrito.productos[indice].cantidad += cantidad
            }else{
                console.log('id_prod else',id_prod)
                let producto = JSON.stringify(await DAOProduct.getById(id_prod))
                console.log('producto',(producto))
                const productos2 = JSON.parse(producto)
                console.log('productos2', productos2)
                const productoCantidad= carrito.productos.push({...productos2,cantidad})
                console.log('productoCantidad', typeof productoCantidad)
                
            }
            carrito = await this.update(carrito._id,carrito.productos)
           
        } catch (error) {
            throw new CustomError(500, error);  
        }
    }

    ////cambiar tomar de producto los datosssssss/////ordenes?????????????????
    async cartCheckoutService(user){
        try {
            let carrito = await this.getByusername(user.username)  
            const productos = carrito.productos
            const message= carrito.productos.map(producto=>
                `PRODUCTO: ${producto.title} PRECIO UNIT.: ${producto.price} CANTIDAD: ${producto.cantidad}`  
            )
            await this.deleteById(carrito._id)
            return productos ///a donde va 
        } catch (error) {
            throw new CustomError(500, error);
        }
    }

    static getInstance() {
  
        if (!instance) instance = new CarritoDaoMongo();
        return instance;
    }
}


module.exports = OrdenesDaoMongo
