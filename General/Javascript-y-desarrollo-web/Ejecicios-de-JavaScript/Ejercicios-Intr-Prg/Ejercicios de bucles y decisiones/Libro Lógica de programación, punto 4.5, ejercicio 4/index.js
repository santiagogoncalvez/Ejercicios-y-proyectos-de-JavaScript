// Sumatoria de numeros pares e impares dado un intervalo [ M, N]

var sumatoriaNumerosPares = 0;
var sumatoriaNumerosImpares = 0;
var valor1, valor2;
var contadorNumeros;
do {
    // Ingreso de valores del intervalo
    valor1 = prompt("Ingresar el extremo mas chico del intervalo:");
    valor1 = parseInt(valor1);

    valor2 = prompt("Ingresar el extremo del intervalo mas grande del intervalo:");
    valor2 = parseInt(valor2);
} while (valor1 > valor2);

contadorNumeros = valor1;

// Estructura de repetición para sumar los numeros pares y para sumar los numeros impares.
do {

    // identificar si el numero es par o impar
    resto = contadorNumeros % 2;

    if (resto == 0) {
        // Numero par
        sumatoriaNumerosPares = sumatoriaNumerosPares + contadorNumeros;
        contadorNumeros = contadorNumeros + 1;
    } else {

        // numero impar
        sumatoriaNumerosImpares = sumatoriaNumerosImpares + contadorNumeros;
        contadorNumeros = contadorNumeros + 1;
    }


} while (contadorNumeros <= valor2);

console.log("En el intevalo [" + valor1 + ";" + valor2 + "] la sumatoria de sus numeros pares es de " + sumatoriaNumerosPares + " y la sumatoria de numeros impares es de " + sumatoriaNumerosImpares + ".")
