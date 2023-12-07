// Algoritmo: multiplos de 3

// Ingresar numero
var numero = Number(prompt("Ingresar numero:"));

// Analizar si el numero ingresado es multiplo de 3
var numeroCopia = numero;
var resto = numeroCopia % 3;
if (resto != 0) {
    do {
        numeroCopia = numeroCopia + 1
        resto = numeroCopia % 3;
    } while (resto != 0);
};

numeroLimite = numeroCopia;

// Establecer el numero de multiplos para despues mostrarlos de forma descendente
contadorMultiplos = 0;
do {
    var resto2 = numeroLimite % 3;
    if (resto2 == 0) {
        contadorMultiplos = contadorMultiplos + 1;
    };
    numeroLimite = numeroLimite + 1;
} while (contadorMultiplos <= 9);

// Mostrar los multiplos de 3 de forma descendente
console.log("Los 10 multiplos de 3 desde el numero dado (" + numero + ") son:")
do {
    var resto3 = numeroLimite % 3;
    if (resto3 == 0) {
        console.log(numeroLimite)
    };
    numeroLimite = numeroLimite - 1;
} while (numeroLimite >= numeroCopia);