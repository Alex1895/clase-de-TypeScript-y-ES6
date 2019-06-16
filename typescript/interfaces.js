"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.name);
}
function enviarCuartel(xmen) {
    console.log("Enviando al Cuartel: " + xmen.name);
}
let Wolverine = {
    name: "wolverine",
    power: "inmortal"
};
enviarMision(Wolverine);
enviarCuartel(Wolverine);
