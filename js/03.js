// TIPOS DE DATO


//UNDEFINED

let cliente 

console.log(cliente)

//con typeof puedes ver el tipo de dato de la varible que estas usando
console.log(typeof cliente)

let espacio = "------------------------------------"
console.log(espacio)

//STRING O CADENAS DE TEXTO
/*
Para inicializar un tipo de dato string, se puede iniciar de dos maneras:
1) = ''  -> comillas simples
2) = ""  -> comillas dobles
*/ 
let alumno = "lian"

console.log(alumno)
console.log(typeof alumno)
console.log(espacio)

//NUMBERS
/*
A diferencia de otros lenguajes, en javascrip cual a cualquier variable
que le asignes como dato un numero, js lo nombrara como number.
*/

const numero = 20.20
const numero1 = 140
const numero2 = -34
const numero3 = "20"

console.log(numero)
console.log(typeof numero)
console.log(numero1)
console.log(typeof numero1)
console.log(numero2)
console.log(typeof numero2)
/* 
cuando agregas las comillas a cualquier numero este automaticamente se comvertira
en un tipo de dato String; ojo que no se puede sumar un strin con un number
asi como se ve en el ejemplo
*/
console.log(numero3)
console.log(typeof numero3)
console.log(numero3 + numero1)

console.log(espacio)

//BIGINT
/*
con el tipo de dato bigint se puede nombrar numero grandes y para poder utilizarlo
se inicializa con un constructor BigInt()
*/

const numeroGrande = BigInt(1684316549684651321654964)
console.log(numeroGrande)
console.log(typeof numeroGrande)

console.log(espacio)

//BOOLEAN
/*
Este tipo de dato solo se resume en dos: true(verdadero) o false(falso)
 */

const persona = true
const mujer = false
console.log(persona)
console.log(typeof persona)
console.log(mujer)
console.log(typeof mujer)

console.log(espacio)

//NULL
/*
para que un dato sea null, se tiene que asignar que el dato sea null ya que de otra
manera siempre sera undefined
*/
 const descuento  = null
 console.log(descuento)

 let precio
 console.log(precio)
 console.log(espacio)

 //SYMBOL
/*
El dato Symbol, es unico nunca se puede repetir, si quieres comparar los teniendo
el mismo valor siempre te dara como resultado false.
 */
 const primerSymbol = Symbol(30)
 const segundoSymbol = Symbol(20)
 console.log(primerSymbol != segundoSymbol)