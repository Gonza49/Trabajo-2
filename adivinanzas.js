const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100 ) + 1;
};

console.log("Numero aleatorio: ", generarNumeroAleatorio() );

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto) {
        console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
    } else if(numeroAdivinado > numeroSecreto) {
        console.log("El numero secreto es menor. ¡ Sigue intentando!");
    } else {
        console.log("El numero secreto es mayor. ¡Sigue intentando")
    }

};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza,
}
