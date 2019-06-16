"use strict";
let nombre = "Peter"; // solo funciona con Strings
let edad = 25; // solo funciona con numero
let boolean = true; // solo funciona con booleanos
let hoy = new Date(); //solo funciona con fechas
let cualquiera; //acepta cualquier tipo de dato en la variable 
// diferencias de var & let 
var saludo = "hola";
if (true) {
    var saludo = "adios";
} //imprime adios
console.log(saludo);
let hello = "hola";
if (true) {
    let hello = "adios";
} //imprime hola
console.log(hello);
// declaracion de constantes en ES6 y Typescript
const HOLA = "hola";
console.log(HOLA);
// Objetos con TypeScript
let spiderman = {
    nombre: "peter",
    edad: 20
};
console.log(spiderman);
//si queremos cambiar los valores del objeto spiderman
/*let spiderman={
    nombre: "angel",
    edad: 10
    //domicilio: "NY"
}*/ 
