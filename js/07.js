//Uniendo dos o mas objetos en uno solo

let espacio = "------------------------------------"

const auto = {
    motor: "Cabezal",
    precio: "3500",
    disponible: false
    
}

const marca = {
    motor : 1600,
    nombre : "Audi",
    precio: 65000
}


/*De esta manera se  puede unir dos objetos en uno solo, pero al momento de ejetucar
se ve de una manera muy desordenada entonces, se aplican el metodo de los tres
puntos (...)
 */
const concecionario = {
    auto,
    marca
}

console.log(concecionario)
console.log(espacio)
/*De esta manera hacemos que un objeto sea un objeto plano, pero al momento de hacer eso
si los objetos tienen las mismas nombres de la propiedades, esta tomara el ultimo
nombre de la propiedad asignada en este caso toma el motor de marca y tambbien el precio

 */
const concecionario2 = {
    ...auto,
    ...marca
}

console.log(concecionario2)
//Con el este metodo se ahorra mas codigo y hace exactamente lo mismo
console.log(espacio)

const nuevoObjeto2 = Object.assign(auto,marca)
console.log(nuevoObjeto2)