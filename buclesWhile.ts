/// BUCLE WHILE
/* 
1. Realizar una función que te devuelva si existe un numero par en el array de números que introduces
como parámetro de entrada. La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums) */ 

let arrayNumeros = [1,2,3,4,5,6,7,8];
let arrayNumeros2 = [1,3,5,7];


function hasEven(numbers: number[]){

    let i = 0;
    while (i < numbers.length){
        if( numbers[i] % 2 == 0){
            return true;
        }
        i++;
    } 
    return false;
}

hasEven(arrayNumeros);
console.log(hasEven(arrayNumeros)); /// imprime true.
console.log(hasEven(arrayNumeros2)); /// imprime false.


/* 2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si todos los
nombres empiezan por M.
La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames) */

let nombres = ["Irene", "Amelia", "Maria", "Juan", "Anna", "Miguel"];
let nombres2 = ["Mariluz", "Melisa", "Maria", "Manolo", "Miguel"];

function startWithM(nombres: string[]){
    
    let i = 0;
    while (i < nombres.length){
        if (nombres[i][0] !== "M"){
            return false;
        }
        i++;
    } 
    return true;
}

console.log(startWithM(nombres)); /// imprime false
console.log(startWithM(nombres2)); /// imprime true
