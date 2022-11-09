// const {ProductoDaoFirebase} =  import("./productos/productoDaoFirebase.js");
// const {CarritoDaoFirebase} =import("./carritos/carritoDaoFirebase.js");
// // const { default: ProductoDaoMongo } = import("./productos/productoDaoMongo.js");
// const { default: CarritoDaoMongo } = import("./carritos/carritoDaoMongo.js");

// class DaoFactory{
//   createProductDao(databaseType){
//     if(databaseType=="Firebase"){
//         return  ProductoDao = new ProductoDaoFirebase;    
//     }
//     if(databaseType=="Firebase"){
//         return CarritoDao = new  CarritoDaoFirebase;
//     }
//   }
//   acreateCarritoDao(databaseType){
    
//     if(databaseType=="mongo"){
//         return  ProductoDao = new ProductoDaoMongo;    
//     }
//     if(databaseType=="mongo"){
//         return CarritoDao = new  CarritoDaoMongo;
//     }
//   }
// }


// //en INDEX

// databaseType = process.env.DATABASE
// daoFactory = DaoFactory()
// ProductoDao = daoFactory.createProductDao(databaseType)