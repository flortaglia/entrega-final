class UsuarioDTO {
    constructor(data){
        this._id=data.id
        this.username= data.username
        this.nombre= data.nombre
        this.apellido =data.apellido
        this.direccion = data.direccion
        this.telefono =data.telefono
        this.avatar = data.avatar
    }
}
module.exports = UsuarioDTO; 