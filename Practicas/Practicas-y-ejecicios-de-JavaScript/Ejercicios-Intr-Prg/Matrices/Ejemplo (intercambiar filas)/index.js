// Algoritmo: matriz caracateres

var matrizCaracteres;
var matrizIntercambiada;
var fila1, fila2, tamaño;

// Funcines
function leerDatos(tamaño, matriz) {
    for (i = 0; i < tamaño; i++) {

        for (j = 0; j < tamaño; j++) {
            matriz[i][j] = Number(prompt("Ingresar numero para posicion (" + i + ";" + j + "): "))
        };
    };

    return matriz;
};

function dimensionar(tamaño) {

    matriz = Array(tamaño);
    for (i = 0; i < tamaño; i++) {

        matriz[i] = Array(tamaño);
    }
    return matriz;
}

// dimensionar una matriz
dimension = function dimensonar(tamaño) {

    matriz = Array(tamaño);
    for (i = 0; i < tamaño; i++) {

        matriz[i] = Array(tamaño);
    }
    return matriz;
}

// Funcion intercambiar filas
function intercambiarF(f1, f2, tamaño, dimension, matriz) {

    var aux;
    var mat = dimension(tamaño);

    for (i = 0; i < tamaño; i++) {

        for (j = 0; j < tamaño; j++) {
            mat[i][j] = matriz[i][j];
        };
    };

    for (i = 0; i < tamaño; i++) {

        aux = mat[f1][i];
        mat[f1][i] = mat[f2][i];
        mat[f2][i] = aux;

    };

    return mat;

};


// Ingreso de tamaño de matriz
do {
    tamaño = Number(prompt("Ingresar tamaño de la matriz:"));
} while (Number.isInteger(tamaño) == false);

// Dimensionar matriz
matrizCaracteres = dimensionar(tamaño);

// Ingresar datos en matriz

leerDatos(tamaño, matrizCaracteres)

// Intercambiar filas
do {
    fila1 = Number(prompt("Ingrese la fila 1 a intercambiar: "));
} while (Number.isInteger(fila1) == false);

do {
    fila2 = Number(prompt("Ingrese la fila 2 a intercambiar: "));
} while (Number.isInteger(fila1) == false);

// Intercambio
matrizCambio = intercambiarF(fila1, fila2, tamaño, dimension, matrizCaracteres)

// Mostrar resultados

console.log(matrizCaracteres, matrizCambio)




