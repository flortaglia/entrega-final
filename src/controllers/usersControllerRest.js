const UsuarioDaoFactory = require ('../classes/usuario/UsuarioDaoFactory.class.js') 
const DAO = UsuarioDaoFactory.getDao()

class UsuarioControllerRest{
    async getUsuarios(req, res){
        try {
            const verUsuarios = await DAO.getAll()
            // res.render('productos.hbs',{verProductos})
            res.status(200).json(verUsuarios)
        } catch (error) {
            res.status(error.errorCode).send(error.message);
        }
    }
       
    async postUsuarios (req, res) {
        try {
            // const {username, password, name, surname, address, phone,avatar} = req.body 
            const usuario = await DAO.create(req.body )
            res.status(201).json(usuario)
        } catch (error) {
            console.log('error productcontroller',error)
            res.status(error.errorCode).send(error.message); 
        }
    }

    async getUsuarioId (req, res) {
        try {
            const id = req.params.id
            console.log('id', id)
            const usuario = await DAO.getById(id)
            //  console.log('elemento', elemento)
            if(!usuario){return res.status(404).json({error: "usuario no encontrado"})}
            res.status(200).json(usuario)
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    
    }
   
    async putUsuario (req, res) {
        try { 
            const {username, password, name, surname, address, phone,avatar} = req.body
            const id = req.params.id
            const usuario = await DAO.getById(id)
            if(!usuario){return res.status(404).json({error: "usuario no encontrado"})}
            const usuarioChanged = await DAO.update(id,username, password, name, surname, address, phone,avatar)
            res.status(200).json(usuarioChanged)
            
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }

    async deleteUsuario (req, res)  {
        try {
            const id = req.params.id
            if(!id){return res.json({ error: "El usuario no existe" })}
            await DAO.deleteById(id)
            res.json(await DAO.getAll())
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
}
module.exports = UsuarioControllerRest;
