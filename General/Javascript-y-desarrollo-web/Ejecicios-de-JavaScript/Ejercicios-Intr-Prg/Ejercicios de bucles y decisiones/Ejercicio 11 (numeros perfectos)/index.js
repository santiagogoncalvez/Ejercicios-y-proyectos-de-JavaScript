// Algoritmo: leer un numero n e imprimir los numeros perfectos entre 1 y n.

// Proceso para ver si un numero es perfecto o no
var numero;
var numeroMenor;
var sumaDivisores;
var numeroIngresado;
var cantidadNumerosPerfectos = 0;

do {
    numeroIngresado = Number(prompt("Ingresar un numero para ver cuantos numeros perfectos hay en el intervalo desde 1 hasta el numero ingresado, [1;n]"))
} while (numeroIngresado < 1)

// Analizar cada numero entre [1 ; n] para ver si son perfectos o no;
// Ciclo:
var contadorNumeros = numeroIngresado;
do {

    // Analizar si un numero es perfecto o no

    // Inicialización variables
    var sumaDivisores = 0;
    var numeroMenor = 1;
    
    // Inicio del ciclo, 
    do {

        resto = contadorNumeros % numeroMenor;
        if (resto == 0) {
            sumaDivisores = sumaDivisores + numeroMenor;
        }
        numeroMenor = numeroMenor + 1;
    } while (numeroMenor < contadorNumeros)

    if (sumaDivisores == contadorNumeros) {
        console.log("Numero perfecto: " + contadorNumeros)
        cantidadNumerosPerfectos = cantidadNumerosPerfectos + 1
    }

    contadorNumeros = contadorNumeros - 1;

} while (contadorNumeros > 1)

console.log("La cantidad de numeros perfectos entre 1 y " + numeroIngresado + " es: " + cantidadNumerosPerfectos)
// Al final se deberian ver todos los numeros perfectos entre 1 y n en la consola.

// Fin del algoritmo

// prompt("Ingresar un numero para ver cuantos numeros perfectos hay en el intervalo [1;n]")