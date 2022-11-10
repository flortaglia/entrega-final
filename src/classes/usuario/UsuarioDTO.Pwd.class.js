class UsuarioDTOPwd {
    constructor(data){
        this._id=data.id
        this.username= data.username
        this.password= data.password
        this.name= data.name
        this.surname =data.surname
        this.address = data.address
        this.phone =data.phone
        this.avatar = data.avatar
    }
}
module.exports = UsuarioDTOPwd; 