//this file in typescript we'll use interface 
interface Xmen { //declaration of interface
    name : string,
    power : string
}

function enviarMision (xmen:Xmen) { //function using the interface
    console.log("Enviando a: "+ xmen.name);
}
function enviarCuartel  (xmen:Xmen) {
    console.log("Enviando al Cuartel: "+ xmen.name);
}
let Wolverine:Xmen ={ //declared object with the interface rules
    name: "wolverine",
    power: "inmortal"
}

enviarMision(Wolverine);//call of function
enviarCuartel(Wolverine);//call of function