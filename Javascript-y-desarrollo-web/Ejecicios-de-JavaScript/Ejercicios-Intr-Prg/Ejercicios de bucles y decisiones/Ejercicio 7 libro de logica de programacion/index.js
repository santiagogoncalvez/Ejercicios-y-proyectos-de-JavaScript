//  Algoritmo 3n + 1

var valor1;
var unidad = 1;
// Ingreso del numero al que se le va a aplicar la secuencia, con validacion ( valor1 = entero)
do {
    valor1 = Number(prompt("Ingrese numero entero distinto de 0 para aplicarle la conjetura de Collatz y mostrar posteriormente la secuencia:"));
} while (!Number.isInteger(valor1) || valor1 == 0);

var numero = valor1;


// Aplicar el proceso de la conjetura
do {
    
        // ver si el numero es par o no
    resto = numero % 2;

    if (resto == 0){
        numero = numero / 2;
        console.log(numero)
    } else {
        numero = 3 * numero + 1;
        console.log(numero)
    }
}while(numero > 1 || numero < -1)

console.log("Fin algortmo y formación de ciclo 4, 2, 1.")
