const UsuarioDTO = require("../classes/usuario/UsuarioDTO.class.js");
const UsuarioDTOPwd = require("../classes/usuario/UsuarioDTO.Pwd.class.js");
const CustomError = require ("../classes/CustomError.class.js");
const DAO = require ("../classes/Dao.class.js") ;
const MongoClient = require ("../classes/MongoClient.class")
const Usuarios = require ("../models/usuario.model.js")


class UsuarioDaoMongo extends DAO {
    constructor() {
        super();
        this.collection = Usuarios;
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
            const usuario = await this.collection.findOne({ _id: id }, { __V: 0 });
            return new UsuarioDTO(usuario);
        } catch (error) {
            throw new CustomError(500, error);
        }
    }

    async getByUsername(username) {
        try {
            const usuario = await this.collection.findOne({ username: username});
            if(!usuario)return false;
            return new UsuarioDTOPwd(usuario)
        } catch (error) {
            throw new CustomError(500, error);
        }
    }

    async getAll(){
        try {
            const usurios = await this.collection.find({ });
            const result = usurios.map((usuario)=>(new UsuarioDTO(usuario)))
            return result;
        } catch (error) {
            throw new CustomError(500, error);
        }
    }
    async create(newUser){ 
        try {
            // username, password, nombre, direccion, edad, telefono,avatar
            const usuario = new this.collection(newUser)
            await usuario.save()           
            return new UsuarioDTOPwd(usuario)
        } catch (error) {
            throw new CustomError(500, error);
        }          
    }

    async update(id, username, name,surname, address, phone, avatar,admin){
        try {
            await this.collection.updateOne({_id:id}, {username, name,surname, address, phone, avatar,admin})   
            const usuario = await this.getById(id)  
            return new UsuarioDTO(usuario)
        } catch (error) {
            throw new CustomError(500, error);
        } 
    }

    static getInstance() {
        let instance
        if (!instance) instance = new UsuarioDaoMongo();
        return instance;
    }
}

module.exports = UsuarioDaoMongo;

