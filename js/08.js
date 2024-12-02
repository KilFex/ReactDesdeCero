//Template String

const auto = "Toyota"
const potencia = "250hp"
const precio = 25000

//Anteriormente se concatenaba de esta manera:

console.log("Modelo " + auto + " potencia " + potencia + " precio " + precio)

//Ahora esta es la manera mas moderna de hacerlo

console.log(`Modelo ${auto} potencia ${potencia} precio $${precio}`)