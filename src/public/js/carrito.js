class Carrito{
    constructor(){
        this.bindEvents()
    }
    bindEvents(){
        const addProductBtm = document.querySelector(".addProduct")
        addProductBtm.addEventListener("click",this.addProduct, true);
    }
    addProduct(event) {
        event.preventDefault();
        const url = event.target.href
        fetch(url).then((json)=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Prodcucto agregado',
                showConfirmButton: false,
                timer: 1500
              })
         
           console.log(json)
        })
    }
}