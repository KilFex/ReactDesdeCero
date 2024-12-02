let espacio = "------------------------------------"

//Objetos
/*
Un objeto esta definido por un llave y un valor, donde en el lado izquierdo siempre
estara la key o la palabra clave y de lado derecho estara el valor.
*/
const auto = {
    motor: "Cabezal",
    precio: "3500",
    disponible: false
}

console.log(auto)
//al especificar que table, se mostrar en forma de tabla el objeto al cual esta
//invocando
console.table(auto)
/*Ahora aprenderemos como ingresar a un lugar especifico de tu objeto con la 
sintaxis de punto
 */
console.log(auto.motor)
console.log(espacio)

//Destructuring
/*
Con este metodo puedes acceder a varias propiedades de tu objeto, en una sola 
linea de codigo, esta es una forma mas moderna de hacerlo ya que anteriormente
se hacie de otra forma.
*/
//MANERA MODERNA
const {motor,precio,disponible} = auto
console.log(motor)
console.log(precio)
console.log(disponible)

console.log(espacio)

//MANERA ANTIGUA
// const motor = auto.motor
// const precio = auto.precio
// const disponible = auto.disponible
// console.log(motor)
// console.log(precio)
// console.log(disponible)

//Object literal enhacement
/*
Con este metodo puedes crear un objeto a partir de variables asi como en este
ejemplo.
*/

const profesor = "Jhon"
const curso  = "Matematicas"

const nuevoObjeto = {
    profesor: profesor,
    curso : curso 
}

console.log(nuevoObjeto)
console.table(nuevoObjeto)