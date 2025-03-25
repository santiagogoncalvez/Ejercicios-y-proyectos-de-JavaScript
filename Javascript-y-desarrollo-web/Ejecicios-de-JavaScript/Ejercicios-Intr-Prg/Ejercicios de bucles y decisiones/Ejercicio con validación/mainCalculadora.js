// Calculadora
// Este algoritmo simula una calculadora con las 4 operaciones básicas.

var numero, calculo;
var operador;
var bandera;



do {
    let numerito = prompt("Digite un número");
    numero = parseInt(numerito);
}
while (numero < -200000 || numero > 200000 || numero === null);


// Inicialización de variables
calculo = numero;
bandera = true;


// Proceso repetitivo
do {

    // Introducción del operador

    do {
        let prompOperador = prompt("Introduzca un operador:")
        operador = prompOperador;
    } while (operador != '+' && operador != '-' && operador != '/' && operador != '*' && operador != '=')

    if (operador != '=') {

        // Introducción del segundo dígito
        do {
            let prompOperadorr = prompt("Introduzca otro número:")
            numero = parseInt(prompOperadorr);
        } while (numero < -200000 || numero > 200000)


        switch (operador) {
            case '*': calculo = calculo * numero;
                break

            case '+': calculo = calculo + numero;
                break

            case '-': calulo = calculo - numero;
                break

            case '/': 
            if (numero == 0) {
                alert("Error. No se puede dividir por 0");
                bandera = false;
                // cambio de estado de la bandera
                } else {
                calculo = calculo / numero;
                } 
                break
        }

    }

    // Mostrar resultado de calculo
    if (bandera) {
        alert(calculo)
    }





    // Condicion de repeticion del proceso que se detiene hasta que se ingrese un '='
} while (operador != '=')

console.log(calculo)

