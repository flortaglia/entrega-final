class chatDTO {
    constructor(data){
        this._id=data.id
        this.mail= data.mail
        this.type =data.type
        this.tiempochat=data.tiempochat
        this.message = data.message
    }
}
module.exports = chatDTO; 