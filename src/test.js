// require('dotenv').config()
// const mongoose = require("mongoose") ;
// const DAO = require ("./classes/Dao.class.js") ;
// const MongoClient = require ("./classes/MongoClient.class")

// const cartSchema = new mongoose.Schema({
//     username: { type: String, require: true, max: 200, unique:true},
//     price:{ type: Number, require: true},
//     productos: {type: Array, required: true }
// })

// const CartModel = mongoose.model ("carts", cartSchema)

// const productSchema = new mongoose.Schema({
//   title: { type: String, require: true, max: 200 },
//   price:{ type: Number, require: true},
//   stock:{ type: Number, require: true}
// })

// const ProductModel = mongoose.model ("products", productSchema)

// class ProductDTO {
//   constructor(data){
//       this.id=data.id
//       this.title= data.title
//       this.price = data.price
//       this.stock = data.stock
//   }
//   toJson(){
//     return {
//       id: this.id,
//       title: this.title,
//       price: this.price,
//       stock: this.stock,
//     }
// }
// }

// class CartProductDTO {
//   constructor(data){
//       this.id= data.hasOwnProperty('_id') ? data._id : null,
//       this.title= data.title
//       this.price = data.price
//       this.quantity = data.quantity
//   }
// }

// class CartDTO {
//   constructor(data){
//       this.id=data.id
//       this.username= data.username
//       this.price = data.price
//       this.products = data.products
//   }
// }

// class CartDaoMongo extends DAO {
//   constructor() {
//     super();
//     this.collection = CartModel;
//     this.db = MongoClient.getInstance();
//   }
 
//   async create(username){ 
//       try {
//           const doc = new this.collection({
//             username:username,
//             price:0,
//             productos:[]
//           })
//           const cartModel = await doc.save() 
//           return new CartDTO(cartModel)
//       } catch (error) {
//           throw new CustomError(500, error); 
//       }       
//   }
//   async getByusername(username){ 
//       try {
//           const cartModel = await this.collection.findOne({ username: username});
//           return new CartDTO(cartModel)
//       } catch (error) {
//           throw new CustomError(500, error);
//       }
//   }
//   async update(id,productos){  
//       try {
//           productos = productos.map()
//           await this.collection.updateOne({_id:id}, {productos})   
//           const elemento = await this.getById(id)  
//           return elemento
//       } catch (error) {
//           throw new CustomError(500, error);
//       }
//   }
//   async addProduct(cantidad, id_prod, username){
//       try {

//           let cart = await this.getByusername(username)
//           if(!cart) { 
//             cart= await this.create(username)
//           }

//           const indice = cart.products.findIndex( (prod)=> prod.id === id_prod)
//           if(indice >= 0){
//             cart.products[indice].quantity += cantidad
//           }else{
//               let producto = JSON.parse(JSON.stringify(await DAOProduct.getById(id_prod)))
//               carrito.productos.push({...producto,cantidad})   
//           }
//           carrito = await this.update(carrito._id,carrito.productos)
         
//       } catch (error) {
//           throw new CustomError(500, error);  
//       }
//   }
// }

// class ProductDaoMongo extends DAO {
//   constructor() {
//     super();
//     this.collection = ProductModel;
//     this.db = MongoClient.getInstance();
//   }
 
//   async create(productDto){ 
//       try {
//           const doc = new this.collection(productDto.toJson())
//           const productModel = await doc.save() 
//           return new ProductDTO(productModel)
//       } catch (error) {
//           throw new CustomError(500, error); 
//       }       
//   }
// }


// empanada = new ProductDTO({
//   title: "Empanada",
//   price:100,
//   stock:2
// })

// pizza = new ProductDTO({
//   title: "Pizza",
//   price:500,
//   stock:2
// })

// const productDaoMongo = new ProductDaoMongo()
// await ProductModel.deleteMany({});
// empanada = await productDaoMongo.create(empanada)
// pizza = await productDaoMongo.create(pizza)

// console.log("Borro productos:")
// console.log("empanada:", empanada)
// console.log("pizza:", pizza)

// product2 = new CartProductDTO({
//   title: "pizza",
//   price:300,
//   quantity:1
// })

// product1 = new CartProductDTO({
//   title: "empanada",
//   price:300,
//   quantity:2
// })

// product2 = new CartProductDTO({
//   title: "pizza",
//   price:300,
//   quantity:1
// })


// cart = new CartDTO({
//   username: "pizza",
//   price:300,
//   products: [product1, product2]
// })

// const empanada = new ProductModel()

// const username = 'pabloredigonda'
// const cartDaoMongo = new CartDaoMongo()

// const pabloCart = cartDaoMongo.create(username)
// cartDaoMongo.addProduct(cantidad, id_prod, username)