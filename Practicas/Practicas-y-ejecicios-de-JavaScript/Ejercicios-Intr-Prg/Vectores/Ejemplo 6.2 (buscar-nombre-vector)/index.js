// Algoritmo: ingresar nombres y despues buscar un nombre en especifico

var cantNomb;
var arregloNombres = [];
var i;
var nombreBuscar;
var encontrado;

do {
    cantNomb = Number(prompt("Cantidad de nombres a ingresar:"))
} while (cantNomb < 1 || Number.isInteger(cantNomb) == false);

for (i = 0; i < cantNomb; i++) {
    do {
        arregloNombres[i] = prompt("Ingresar nombre " + i);
    } while (typeof arregloNombres[i] != 'string')
}

do {
    nombreBuscar = prompt("Ingresar nombre que se quiera buscar:")
} while (typeof nombreBuscar !== 'string')

encontrado = false

for (i = 0; i < cantNomb; i++) {
    if (arregloNombres[i] == nombreBuscar) {
        console.log("El nombre esta en la posicion ", i)
        encontrado = true;
    }
}

if (encontrado == false) {
    console.log("El nombre ingresado no se encuentra en el arreglo")
}