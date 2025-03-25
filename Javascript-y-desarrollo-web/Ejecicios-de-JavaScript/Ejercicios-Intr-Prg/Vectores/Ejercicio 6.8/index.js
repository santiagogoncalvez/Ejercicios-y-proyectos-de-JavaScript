// Algoritmo: Diseñe un algoritmo que almacene en vectores el nombre y
// el genero de un grupo de n personas y, que a traves de funciones permita
// buscar la posicion del vector en que se encuentra una persona cualquiera,
// buscada por su nombre y el genero que esta persona tiene. Con objeto de
// almacenar los generos de manera optima, utilice una ’M’ para Masculino
// y una ’F’ para femenino.

var tamanio, posicionNombre;
var buscarNombre;
var nombreBuscado;
var arregloNombres = [];
var arregloGeneros = [];

function leerNombres(tamanio) {
var arregloNombres = [];
    for (i = 0; i < tamanio; i++) {
            arregloNombres[i] = prompt("Ingresar nombre " + i);
            
    
    };
    return arregloNombres;
};

function leerGeneros(tamanio) {

    for (i = 0; i < tamanio; i++) {
        do {
            arregloGeneros[i] = prompt("Ingresar genero de la persona " + i + " (M/F).");
            if (arregloGeneros[i] != 'M' && arregloGeneros[i] != 'm' && arregloGeneros[i] != 'F' && arregloGeneros[i] != 'f') {
                alert("Genero ingresado no válido")
            };

        } while (arregloGeneros[i] != "M" && arregloGeneros[i] != "m" && arregloGeneros[i] != "F" && arregloGeneros[i] != "f");

    };

    return arregloGeneros;
};

function obtenerPosicion(buscarNombre, arregloNombres) {
    posicionNombre = -1;
    
    for (i = 0; i < tamanio; i++) {
        if (buscarNombre == arregloNombres [i]) {
            posicionNombre = i;
        };


    };
    
    return posicionNombre;
};

function posicionGenero(posicion, arregloGeneros) {

    return arregloGeneros[posicion];

};

function mostrarResultados(posicion, nombre, genero) {
    if (nombre != -1) {
        console.log("El nombre '" + nombre + "' se encuentra en la posicion " + posicion + " y su genero es " + genero);
    } else {
        console.log("El nombre no se encuentra en la lista.")
    }
};

// Pedir datos
do {
    tamanio = Number(prompt("Ingresar la cantidad de personas:"));
} while (Number.isInteger(tamanio) == false);

arregloNombres = leerNombres(tamanio);
arregloGeneros = leerGeneros(tamanio);

buscarNombree = prompt("Ingrese el nombre de la persona a buscar:");
posicionn = obtenerPosicion(buscarNombree, arregloNombres, tamanio);
generoo = posicionGenero(posicionn, arregloGeneros);

// Mostrar resultados
mostrarResultados(posicionn, buscarNombree, generoo)
