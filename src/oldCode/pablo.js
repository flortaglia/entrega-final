




class UserDto {
    constructor (id, name, birthday){
        this.id = id
        this.name = name
        this.birthday = birthday
    }
}



// Entidad de dominio
// puede tener comportamiento (getAge)
class User {
    constructor (id, name, birthday, languages){
        this.id = id
        this.name = name
        this.birthday = birthday
        this.languages = languages
    }

    getAge() {
        return currentYear - bir
    }

    addLanguage(language){
        this.languages.push(language)
    }
}




class Person {

    constructor (name, country){
        this.name = name
        this.country = country
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

}


let pablo = new Person("pablo", "argentina")

console.log(pablo.name)
pablo.name = "Flor"
console.log(pablo.name)

console.log(pablo.getName())

pablo.setName("Fulano")



    // carrito.productos.map( (prod)=> console.log(//prod._id.toString()))