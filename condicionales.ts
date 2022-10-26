// RETOS CONDICIONALES // REPASO 2 

/* 2. Realizar una función que dada una fecha de nacimiento te DEVUELVA el signo zodiacal. */

/* La fecha de nacimiento vendrá indicada por dos números: dia y mes.
La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month) */

function zodiac(day: number, month: number){

    let signoZodiacal:string = " ";

    if(day >= 22 && month == 12 || day <= 20 && month == 1){

            signoZodiacal = "Capricornio";

    } else if(day >= 21 && month == 1 || day <= 19 && month == 2){

            signoZodiacal = "Acuario";

    } else if(day >= 20 && month == 2 || day <= 20 && month == 3){

            signoZodiacal = "Piscis";

    } else if(day >= 21 && month == 3 || day <= 19 && month == 4){

            signoZodiacal = "Aries";

    } else if(day >= 20 && month == 4 || day <= 20 && month == 5){

            signoZodiacal = "Tauro";

    } else if(day >= 21 && month == 5 || day <= 20 && month == 6){

            signoZodiacal = "Geminis";

    } else if(day >= 21 && month == 0o6 || day <= 22 && month == 7){

            signoZodiacal = "Cancer";

    } else if(day >= 23 && month == 7 || day <= 22 && month == 8){

            signoZodiacal = "Leo";

    } else if(day >= 23 && month == 8 || day <= 22 && month == 9){

            signoZodiacal = "Virgo";

    } else if(day >= 23 && month == 9 || day <= 22 && month == 10){

            signoZodiacal = "Libra";

    } else if(day >= 23 && month == 10 || day <= 21 && month == 11){

            signoZodiacal = "Escorpio";

    } else if(day >= 22 && month == 11 || day <= 21 && month == 12){

            signoZodiacal = "Sagitario";

    } 

        return signoZodiacal;

}

console.log(zodiac(1,6)); /// GEMINIS
console.log(zodiac(19,1)); /// CAPRICORNIO
console.log(zodiac(13,3)); /// PISCIS


/* 3. Realizar un procedimiento que dado el nombre de un país te IMPRIMA en que continente estás.
(Max 5 países por continente). La cabecera del procedimiento tendrá el siguiente aspecto: function
continent(country) */

function continent(country: string){

    if(country == "Alaska" || country == "Montana" || country == "Nuevo Mexico" || country == "Nevada"){

        console.log("America del Norte");   

    } else if(country == "Holanda" || country == "Portugal" || country == "Bruselas" || country == "Republica Checa"){

        console.log("Europa");

    } else if(country == "Sudafrica" || country == "Libia" || country == "Mali" || country == "Egipto"){

        console.log("Africa");

    } else if(country == "Polinesia" || country == "Nueva Zelanda" || country == "Micronesia" || country == "Australia"){

        console.log("Oceania");

    } else if(country == "Armenia" || country == "Azerbaiján" || country == "Bangladesh" || country == "Arabia Saudita"){

        console.log("Asia");
    
    }else{

        console.log("Antartida"); 
    }
}


continent("Armenia"); /// imprime Asia
continent("Libia"); /// imprime Africa
continent("Nevada"); /// imprime Estados Unidos

/* 4. Realizar una función que te IMPRIMA por consola el siguiente mensaje:

- “El numero es par”, si el numero introducido como parámetro de entrada es par.
- “El numero es impar”, si el numero introducido como parámetro de entrada es impar La cabecera de la función tendrá el siguiente aspecto: function isEven(number). */
    
export function isEven(num: number){
    
    if(num % 2 === 0){ 

        console.log("El numero es PAR.");

    }else{

        console.log("El numero es IMPAR.");

    }   
}
isEven(30); // IMPRIME PAR
isEven(1); // IMPRIME IMPAR