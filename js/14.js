//Ahora veremos las Funciones


sumar(45, 54)
sumar(45, 35)
sumar(15, 65)

function sumar(num1 = 0, num2 = 0){
    console.log(num1 + num2)
}

/*
function expression, con este metodo creas un funcion en donde se asigna a una variable,
la diferencia de eestos dos es que con la function expression, no puedes inicializar los parametros
y luego hacer la funcion, primero tienes que declarar la funcion y luego puedes iniciar o llamar
a los parametros
*/

const sum = function(numero1 = 0, numero2= 0){
    console.log(numero1 + numero2)
}

sum(40, 65)
sum(25 , 65)