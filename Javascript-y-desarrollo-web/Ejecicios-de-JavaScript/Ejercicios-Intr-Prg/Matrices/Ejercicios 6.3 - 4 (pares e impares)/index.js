/*Escriba un algoritmo en pseudocodigo que almacene en un arreglo n
numeros enteros entre 50 y 100. El algoritmo debera encontrar los
numeros pares y los impares que estan almacenados en este arreglo
y almacenarlos en otros arreglos por separado para, posteriormente
mostrarlos al usuario.*/

var arregloNumeros, tamanio, numerosPares, numerosImpares;

// Leer datos
function leerDatos(tamanio, tipo) {

    arreglo = Array(tamanio);

    for (i = 0; i < tamanio; i++) {
        do {
            arreglo[i] = Number(prompt("Ingresar " + tipo + " " + i + ": "));
        } while ( (Number.isInteger(arreglo[i]) == false) || (arreglo[i] < 50 || arreglo[i] > 100) );
    };

    return arreglo;
};

function buscarParesImpares(tamanio, arregloNumeros) {

    // Arreglo con [0] = pares, [1] impares
    arreglo = Array(2);
    arreglo[0] = [];
    arreglo[1] = [];
    j = 0;
    k = 0;

    // evaluar numeros
    for (i = 0; i < tamanio; i++) {

        // Evaluar si cada numero es paro o impar
        if (arregloNumeros[i] % 2 == 0) {

            // Pares
            arreglo[0][j] = arregloNumeros[i];
            j = j + 1;

        } else {

            // Impares
            arreglo[1][k] = arregloNumeros[i];
            k = k + 1;
        }
    };

    return arreglo;

};

// Pedir datos
do {
    tamanio = Number(prompt("Cantidad de numeros enteros a ingresar: "));
} while (Number.isInteger(tamanio) == false);

// Leer datos en el arreglo de los numeros
{
    arregloNumeros = leerDatos(tamanio, "numero");
    console.log(arregloNumeros);

    paresImpares = buscarParesImpares(tamanio, arregloNumeros);
    numerosPares = paresImpares[0];
    numerosImpares = paresImpares[1];

    // Mostrar datos

    console.log("Los numeros pares de los numeros ingresados son: " + numerosPares);
    console.log("Los numeros impares de los numeros ingresados son: " + numerosImpares)
}