// Algoritmo: parar numero a lenguaje coloquial.

var numero, decenas, unidades;
var numeroPalabras;
var arregloUnidades = ["cero","uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
var arregloEspecial = ["once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve"];
var arregloDecenas = ["veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];

do {
    numero = Number(prompt("Ingresar el numero a convertir:"));

    if (numero < 0 || numero > 99) {
        alert("El numero no es valido");
    }
} while (numero < 0 || numero > 99);

if (numero <= 10) {
    numeroPalabras = arregloUnidades [numero]    ;
} else {
    if (numero <= 19) {
        numeroPalabras = arregloEspecial [numero - 11];
    } else {
        unidades = numero % 10;
        decenas = Math.trunc(numero / 10);

        if (unidades == 0) {
            numeroPalabras = arregloDecenas[decenas - 2];
        }  else {
            numeroPalabras = arregloDecenas[decenas - 2] + " y " + arregloUnidades[unidades];
        }

    }
};

console.log("El numero es: ", numeroPalabras);