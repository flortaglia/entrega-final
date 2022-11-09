
class ProductoDTO {
    constructor(data){
        this._id=data.id
        this.title= data.title
        this.category= data.category
        this.description =data.description
        this.price = data.price
        this.thumbnail =data.thumbnail
        this.stock = data.stock
    }
}
module.exports = ProductoDTO;  


// class ProductoDTO {
//     constructor(title,description,code, price,thumbnail, timestamp, stock ){
//         this.title= title
//         this.description = description
//         this.code = code
//         this.price = price
//         this.thumbnail = thumbnail
//         this.timestamp = timestamp
//         this.stock = stock
//     }
// }