"use strict";
function saludarEstudiante(nombre) {
    console.log("Hola: " + nombre.toUpperCase());
}
var estudiante = {
    nombre: "Alex"
};
saludarEstudiante(estudiante.nombre);
