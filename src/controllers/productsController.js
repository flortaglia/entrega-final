const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const DAO = ProductoDaoFactory.getDao()

class ProductoController{
    async getProductos(req, res){
        try {
            const verProductos = await DAO.getAll()
            // res.render('productos.hbs',{verProductos})
            res.status(200).json(verProductos)
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
    async getProductosCategory(req, res){
        try {
            const category = req.params.category
            console.log('category', category)
            const verProductosCategory = await DAO.getByCategory(category)
            // res.render('productos.hbs',{verProductos})
            if(!verProductosCategory){return res.status(404).json({error: "Categoria de producto no encontrada"})}
            res.status(200).json(verProductosCategory)
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
    
    async postProductos (req, res) {
        try {
            // const {title, description, code, price, thumbnail, stock} = req.body 
            const elemento = await DAO.create(req.body )
            res.status(201).json(elemento)
        } catch (error) {
            console.log('error productcontroller',error)
            res.status(error.errorCode).send(error.message); 
        }
    
    }

    async getProductoId (req, res) {
        try {
            const id = req.params.id
            console.log('id', id)
            const elemento = await DAO.getById(id)
            //  console.log('elemento', elemento)
            if(!elemento){return res.status(404).json({error: "Producto no encontrado"})}
            res.status(200).json(elemento)
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    
    }

    async putProduct (req, res) {
        try { 
            const {title, description, code, price, thumbnail, stock} = req.body
            const id = req.params.id
            const elemento = await DAO.getById(id)
            if(!elemento){return res.status(404).json({error: "Producto no encontrado"})}
            const elementChanged = await DAO.update(id,title, description, code, price, thumbnail, stock)
            res.status(200).json(elementChanged)
            
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }

    async deleteProduct (req, res)  {
        try {
            const id = req.params.id
            if(!id){return res.json({ error: "El parámetro no es un número o el id no existe" })}
            await DAO.deleteById(id)
            res.json(await DAO.getAll())
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
}
module.exports = ProductoController;


// const getProductos = async (req, res) => {
//     const verProductos = await ProductoDaoMongo.getAll()
//     // const {username, name, surname,address, age, phone, avatar} = req.user
//     // console.log('verProductos', verProductos)
//     // res.json(verProductos)
//     res.render('productos.hbs',{verProductos})
// }

// module.exports = {
//     getProductos
// }



