
class ProductoDTO {

    constructor(data){
        this._id=data._id
        this.title= data.title
        this.category= data.category
        this.description =data.description
        this.price = data.price
        this.thumbnail =data.thumbnail
        this.stock = data.stock
    }
}
module.exports = ProductoDTO;  
