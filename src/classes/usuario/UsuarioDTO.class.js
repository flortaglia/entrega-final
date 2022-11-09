class UsuarioDTO {
    constructor(data){
        this._id=data.id
        this.username= data.username
        this.name= data.name
        this.surname =data.surname
        this.address = data.address
        this.phone =data.phone
        this.avatar = data.avatar
    }
}
module.exports = UsuarioDTO; 