/*Construya un algoritmo que almacene n numero enteros en un arreglo
y que posteriormente determine si un numero cualquiera ingresado
por el usuario se encuentra o no en el arreglo. Si el numero se
encuentra en el arreglo, el algoritmo debe decir en que posicion esta*/

var arregloNumeros, numeroBuscar, tamanio;

// Leer datos
function leerDatos(tamanio, tipo) {

    arreglo = Array(tamanio);

    for (i = 0; i < tamanio; i++) {
        do {
            arreglo[i] = Number(prompt("Ingresar " + tipo + " " + i + ": "));
        } while (Number.isInteger(arreglo[i] == false));
    };

    return arreglo;
};

// funcion para buscar el numero
function buscarNumero(tamanio, numero, arregloNumeros) {

    var arregloPosicion = [-1];
    var j = 0;

    for (i = 0; i < tamanio; i++) {

        if (numero == arregloNumeros[i]) {
            
            arregloPosicion[j] = i;
            j = j + 1;

        }

    };

    return arregloPosicion;
};

// Pedir datos
do {
tamanio = Number(prompt("Cantidad de numeros enteros a ingresar: "));
} while (Number.isInteger(tamanio) == false);

// Leer datos en el arreglo de los numeros
arregloNumeros = leerDatos(tamanio, "numero");
console.log(arregloNumeros);

// Ingresar numero que se quiere buscar
do{
    numeroBuscar = Number(prompt("Ingresar numero a buscar en el arreglo: "));
} while(Number.isInteger(numeroBuscar) == false);
buscado = buscarNumero(tamanio, numeroBuscar, arregloNumeros);

// Mostrar datos
console.log("Arreglo inicial de numeros: " + arregloNumeros);
if (buscado != -1) {
    console.log("El numero " + numeroBuscar + " esta en la posicion: " + buscado);
} else {
    console.log("El numero ingresado no se encuentra en el arreglo.");
};
