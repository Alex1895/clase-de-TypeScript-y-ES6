"use strict";
let mifuncion = function (numero1, numero2) {
    return numero1 + numero2;
};
let mifuncionF = (numero1, numero2) => numero1 + numero2;
console.log(mifuncion(1, 2));
console.log(mifuncionF(7, 78));
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => console.log(this.nombre + " smash!!!"), 2000);
        //console.log(this.nombre + " smash!!!");
    }
};
hulk.smash();
