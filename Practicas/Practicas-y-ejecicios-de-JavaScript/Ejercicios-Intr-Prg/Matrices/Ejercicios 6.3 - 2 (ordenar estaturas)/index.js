// Algoritmo: 6.3 - 2;

var arregloNombres, arregloEstaturas, cantPersonas;

//funcion para ordenar ascendentemente
function ordenarBurbujaAsc(tamanio) {
    var i;
    var j;
    var auxiliar;
    arreglo = Array(tamanio)


    for (i = 0; i < tamanio - 1; i++) {

        for (j = i + 1; j < tamanio; j++) {

            if (arreglo[i] > arreglo[j]) {

                auxiliar = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = auxiliar;
            };
        };
    };

    return arreglo;

};

//Funcion para ordenar descendentemente
/*function ordenarBurbujaAsc(tamanio, arreglo) {
    var i;
    var j;
    var auxiliar;

    for (i = tamaño -1; i  >= 0; i--) {

        for (j = i - 1; j >= 0; j--) {

            if (arreglo[i] > arreglo[j]) {

                auxiliar = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = auxiliar;
            };
        };
    };

    return arreglo;

};*/

function ordenarBurbujaDesc(tamanio) {
    var i;
    var j;
    var auxiliar;
    var arreglo = Array(tamanio)

    for (i = 0; i < tamanio - 1; i++) {

        for (j = i + 1; j < tamanio; j++) {

            if (arreglo[i] < arreglo[j]) {

                auxiliar = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = auxiliar;
            };
        };
    };

    return arreglo;

};

function leerDatos(cantPersonas, tipo) {

    arreglo = Array(cantPersonas);

    for (i = 0; i < cantPersonas; i++) {
        arreglo[i] = Number(prompt("Ingresar " + tipo + " de persona " + i + ":"));
    };

    return arreglo;
};


//Pedir datos:
do {
    cantPersonas = Number(prompt("Ingresar cantidad de personas:"));
} while (Number.isInteger(cantPersonas) == false);

arregloNombres = leerDatos(cantPersonas, 'nombre');
arregloEstaturas = leerDatos(cantPersonas, 'estatura');

arregloEstaturas2 = ordenarBurbujaAsc(cantPersonas);
arregloEstaturas3 = ordenarBurbujaDesc(cantPersonas);

console.log(arregloEstaturas)

for(i = 0; i < cantPersonas; i++) {console.log(arregloEstaturas2)}

for(i = 0; i < cantPersonas; i++) {console.log(arregloEstaturas3)}
