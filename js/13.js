let espacio = "------------------------------------"

const tecnologias = ['Html', 'Css', 'JavasScript','react.js','typescript','angular']

//foreach
/* ahora vemos maneras diferentes de recorrer un arreglo, exeptuando el .map, los demas
recocorren el array sin modificar.
 */
tecnologias.forEach(function(tecno){
    console.log(tecno)
})

console.log(espacio)

const tecnologias4 = tecnologias.map(function(tech){
    return tech
})
console.log(tecnologias4)
console.log(espacio)

for(let lengua of tecnologias){
    console.log(lengua)
}