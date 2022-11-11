class chatDTO {
    constructor(data){
        this.mail= data.mail
        this.name =data.name
        this.surname = data.surname
        this.age = data.age
        this.alias =data.alias
        this.avatar = data.avatar
        this.message = data.message
        this.tiempochat=data.tiempochat
    }
}
module.exports = chatDTO; 