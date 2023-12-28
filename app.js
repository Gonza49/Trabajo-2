const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanzas');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresar un numero: ');

};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivinar el numero secreto!');
    console.log('Intenta Adivinar el numero del 1 al 100. \n');

    while (numeroAdivinado !== numeroSecreto) {
        
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }

};

juegoAdivinanza();