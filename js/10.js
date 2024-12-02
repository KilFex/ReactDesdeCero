const tecnologias = ['Html', 'Css', 'JavasScript','react']

/*Cuando usamos ->[] automaticamente se convierte en un array, los array tienen varios metodos,
uno de ellos es filter(), lo que hace este metodo es que crea un nuevo array pero con los 
elementos que cumplen la condicion que se señala abajo, por eso es que html ya no aparece
en el array de  tecnologias2, por que filte creo un nuevo arrar con html pero este le saca del
array original, por eso al momento de invocar al tecnologias2, aparecen todos menos 'Html'
 */

const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'Html'){
        return tech
    }
})


/*
Ahora veremos el metodo map, este metodo crea un nuevo array en donde se puede modificar o
transformar, pero no se puede excluir como en el metodo .filter, en este caso vemos que 
reemplaza a react por vite, por que estamos usando .map y este hace que lo reemplaze
*/
const tecnologias3 = tecnologias.map(function(tecno){
    if(tecno === 'react'){
        return 'vite'
    }else{
        return tecno
    }
})

console.log(tecnologias3)