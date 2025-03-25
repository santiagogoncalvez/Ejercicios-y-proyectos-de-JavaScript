// Genere e imprima los multiplos de 3 que se encuentren entre 6 y n,
// donde n tiene que ser superior a 6.

var valor2;
var valor1 = 6;

// Ingreso y validacion del segundo valor hasta donde se van a analizar los multiplos
do {
    var valor2 = parseInt(prompt("Ingresar numero hasta donde se van a analizar los multiplos de 3"));
} while (valor2 <= valor1);

console.log("los multiplos de 3 en el intervalo [6;" + valor2 + "] son:");
// Bucle que se repita hasta que el contador sea igual que el valor2.

numero = valor1;

// Estructura que analiza si el numero es multiplo de 3:
while (numero <= valor2) {

    cociente = numero % 3;

    if (cociente == 0) {
        console.log(numero)
    };

    numero = numero + 1;
}

// Fin del algoritmo

/* Optimizado el algoritmo seria:
Desde el numero base sumar 3 sucesivamente y mostrar cada numero sumado en 3 ya que seria multiplo de 3, mientras qwue el numero sea menor o igual al valor2 */