//Manipulado de Objetos

const auto = {
    motor: "Cabezal",
    precio: "3500",
    disponible: false
}

//Con este metodo no se podra modificar ni agregar ni eliminar las propiedades
//del objeto

//Object.freeze(auto)

//Con este metodo solo se puede modificar la propiedad de un objeto, mas no se 
//podra eliminar ni agregar una nueva propiedad
Object.seal(auto)

//De esta manera podemos modifical las propiedades del objeto
auto.motor = "Bloque de motor"


//De esta manera se puede agregar una nueva propiedad a un objeto
auto.transmicion = "transmicion trasera"

//Con delete se elimina un propiedad del objeto
delete auto.precio

console.log(auto)
console.table(auto)