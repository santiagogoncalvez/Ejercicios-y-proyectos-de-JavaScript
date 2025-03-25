/*La “Busqueda binaria” permite determinar de una manera muy eficiente
la posicion de un elemento en un vector ordenado o concluir que el elemento
no esta presente. Para conocer la posicion del elemento, el algoritmo se
ubica en la posicion del medio y, a traves de una comparacion, define si
debe realizar la busqueda en la mitad superior (mayores a el) o en los
elementos de la mitad inferior (menores a el); esto permite excluir de la
busqueda en cada iteracion la mitad de los elementos del vector; siguiendo
este procedimiento, al final se llega al elemento o se concluye su ausencia*/

var arregloNumeros = [];
var numeroBuscar, posicion, tamanio;

// Guardar datos
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

function buscarElemento(tamanio, arregloNumeros, numeroBuscar) {

    var primero = 0;
    var ultimo = tamanio;
    var centro;
    var posicion = -1;

    while (posicion == -1 && primero <= ultimo) {

        centro = Math.trunc((primero + ultimo) / 2);

        if (numeroBuscar == arregloNumeros[centro]) {

            posicion = centro;

        } else {

            if (numeroBuscar > arregloNumeros[centro]) {

                primero = centro + 1;

            } else {

                ultimo = centro - 1;

            };
        };
    };

    return posicion;
};

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

do {
    numeroBuscar = Number(prompt("Ingresar numero para mostrar posicion: "));
} while (Number.isInteger(numeroBuscar) == false);


posicionNumero = buscarElemento(tamanio, arregloNumeros, numeroBuscar);

if (posicionNumero != -1) {
    console.log("La posicion del numero " + numeroBuscar + " en el vector arregloNumeros es: " + posicionNumero);
} else {
console.log("El numero ingresado para buscar no se encuentra en el vector.")
};



