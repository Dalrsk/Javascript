/* Ejercicio 1: Determinar si un número es par o impar

let a = 10;

if (a % 2 == 0) {
  console.log("el numero es par: " + " " + a);
} else {
  console.log("el numero es impar: " + " " + a);
}
*/

/* Ejercicio 2: Determinar si una persona es mayor o menor de edad

let edad = 17, adulto = 18;
if (edad >= adulto) {
  console.log("Eres mayor de edad");
} else {
  console.log("eres menor de edad")
}
*/

/* Operador AND && Regresan true si ambos son verdaderos o cumplen la condicion
*/
let a = 10;
let valorMin = 0, valorMax = 10;

if (a >= valorMin && a <= valorMax ) {
  console.log("El valor esta dentro de rango")
} else {
  console.log("el valor esta fuera de rango")
}

/* Operador OR || regresan true si alguno de los dos es verdadero
*/

let vacaciones = true , diadescanso = false;

if (vacaciones || diadescanso) {
  console.log("Puede tener vacaciones o descanso");
} else {
  console.log("No puede tener vacaciones o descanso");
}

/* operador ternario */

let resultdo = ( 3 > 2) ? "true" : "false;"
console.log(resultdo);

let numero = 8;
let resultado = ( numero % 2 === 0) ? "es par" : " es impar";
console.log(resultado);

// convertir string a number 

let minumero = 10; 

//console.log(typeof (minumero));

let edad = Number(minumero);
if (edad >= 18) {
console.log("Es mayor de edad");
}
else {
  console.log("Es menor de edad");
}

let edad = (minumero >= 18) ? "puede votar" : "no puede votar";
console.log(edad);
