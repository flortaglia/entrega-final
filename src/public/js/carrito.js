class Carrito{
    constructor(){
        this.bindEvents()
    }
    bindEvents(){
        const addProductBtms = document.querySelectorAll(".addProduct")
        addProductBtms.forEach(btn => {
            btn.addEventListener("click",this.addProduct, true);
        })
        
    }
    addProduct(event) {
        event.preventDefault();
        let url = event.target.href
        const quantity = event.target.parentElement.querySelector("input").value
        url = `${url}/${quantity}`
        fetch(url)
        .then((json)=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Prodcucto agregado',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(function(error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.message || "Ha ocurrido un error",
                showConfirmButton: false,
                timer: 1500
            })
        });
    }
}