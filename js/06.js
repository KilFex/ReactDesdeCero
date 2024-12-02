//Aplicando destrocturin a dos o mas objetos

const auto = {
    motor: "Cabezal",
    precio: "3500",
    disponible: false,
    transmicion: {
        modelo: "Automatico"
    }
}

const marca = {
    motor : 1600,
    nombre : "Audi",
    precio: 65000
}

/*
De esta manera se pude acceder a la propiedades de dos o varios objetos para 
hacerlos uno solo; ahora si ambos obejos tienen el mismo nombre en las keys entoces
se aplica de esta manera --motor : motorCaballaje -- de esta manera se puede acceder a
las propiedades con el mismo  nombres tan solo se cambia de nombre a la propiedad.

Ahora tambien hay casos en que un objeto tiene otro objeto dentro en ese caso para poder 
acceder a su propiedada se hace de la siguiente manera -- transmicion : {modelo} -- de esa menera
se puede acceder directamente ala propiedad del objeto anidado sin mostrar todo el objeto.
*/
const {motor, precio, transmicion : {modelo}} = auto
const {motor : motorCaballaje, precio: precioMarca, nombre} = marca

console.log(motor)
console.log(precio)
console.log(modelo)
console.log(nombre)
console.log(motorCaballaje)
console.log(precioMarca)
