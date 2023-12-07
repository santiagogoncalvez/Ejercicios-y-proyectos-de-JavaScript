/*Construya un algoritmo utilizando funciones y
procedimientos que almacene en un arreglo 4 numeros enteros y luego
ordene estos numeros de menor a mayor utilizando el metodo de
ordenamiento denominado “Metodo de la burbuja”. El algoritmo debe
398 Vectores y matrices
mostrar el arreglo con los datos ingresados inicialmente (en desorden) y el
arreglo con los datos ya ordenados.*/

var arregloNumeros = [];
const max = 4;
var tamanio;

// Ingresar dato numeros
function leerNumeros(tamanio, arregloNumeros) {
    for (i = 0; i < tamanio; i++) {
        arregloNumeros[i] = prompt("Ingresar numero " + i);

    };
    return arregloNumeros;
};


// Funcion ordenar por metodo burbuja
function ordenarBurbuja(tamanio, arregloNumeros) {
    var i;
    var j;
    var auxiliar;

    for (i = 0; i < tamanio - 1; i++) {

        for (j = i + 1; j < tamanio; j++) {

            if (arregloNumeros[i] > arregloNumeros[j]) {

                auxiliar = arregloNumeros[i];
                arregloNumeros[i] = arregloNumeros[j];
                arregloNumeros[j] = auxiliar;
            };
        };
    };

    return arregloNumeros;

};

// Mostrar resultados
function imprimir(tamanio, arregloNumeros) {

    console.log("La secuencia es: ");
    for (i = 0; i < tamanio; i++) {
        console.log(arregloNumeros[i]);
    };

};

do {
    tamanio = Number(prompt("Cantidad de numeros a ingresar: "));
} while (Number.isInteger(tamanio) == false);

arregloNumeros = leerNumeros(tamanio, arregloNumeros)
desorden = imprimir(tamanio, arregloNumeros);
orden = ordenarBurbuja(tamanio, arregloNumeros);
imprimir(tamanio, arregloNumeros);



