//Funciones que retornan valores


/*
Cuando se utiliza el arrow function, no es necesario ponerl el return como en los otros casos
eso siempre y cuando la funcion este declarada en una linea de codigo, pero si tienes  mas datos
si se pone el return.
*/
// const sum = (numero1 = 0, numero2 = 0) => numero1 + numero2



// const sum = function(numero1 = 0, numero2= 0){
//     return numero1 + numero2
// }



function sum(num1 = 0, num2 = 0){
    return num1 + num2
}

const resultado = sum(30, 20)
console.log(resultado)