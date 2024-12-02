//arrow function

const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)

sumar(56, 25)
sumar(10, 20)
sumar(20, 25)

/*
A diferencia de las function expression, con el arrow function se borra , function para
ser reemplazdo con una  => asi se omite mas lineas de codigo y es mas legible
este metodo es tambien conocido como la funcion de flecha
*/
// const sum = function(numero1 = 0, numero2= 0){
//     console.log(numero1 + numero2)
// }