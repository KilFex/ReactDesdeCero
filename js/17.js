/*
Ahora veremos unos de los metodos mas usados lo cual se llaman array methods
*/

const tecnologias = ['html','react.js', 'javascript', 'angular','ruby']
const numeros = [1,2,3,4,5]

const nuevoArray = tecnologias.filter((tech) => tech !== 'html')

const numero2 = numeros.filter(num => num !==2)

console.log(nuevoArray)
console.log(numero2)


const resultado = tecnologias.includes('angular')

console.log(resultado)