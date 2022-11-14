class OrdenesDTO {
    constructor(data){
        this.orderNumber=data.orderNumber
        this.username= data.username
        this.address = data.address
        this.timestamp= data.timestamp
        this.status= data.status
        this.productos =data.productos 
    }
}
module.exports = OrdenesDTO;  