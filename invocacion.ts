// RETOS DE INVOCACIÓN
/* 
Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
par o impar la suma de los caracteres de cada uno de los siguientes arrays:
• [“Casa”, “Coche”, “Ciudad”, “Cesta”]
• [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
• [“Venezuela”, “Veneno”, “Voltaje”] */


import { isEven } from "./condicionales"
import { add } from "./buclesFor"

let arrayC = ["Casa", "Coche", "Ciudad", "Cesta"];
isEven(add(arrayC));


let arrayB = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
isEven(add(arrayB));


let arrayV = ["Venezuela", "Veneno", "Voltaje"];
isEven(add(arrayV));
