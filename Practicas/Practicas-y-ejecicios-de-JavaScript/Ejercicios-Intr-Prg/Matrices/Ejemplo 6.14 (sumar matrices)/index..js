/*
Escriba un algoritmo que almacene en dos matrices de
tamaño 3 x 3, es decir, 3 filas y 3 columnas, numeros enteros y que a
traves de una funcion permita calcular y almacenar en una tercera matriz
la suma de los numeros almacenados en las celdas equivalentes de las dos
anteriores. Al final, el algoritmo debe mostrar las tres matrices. */

var matriz1;
var matriz2;
var matrizSumatoria;
var dimension = 3;
// Funciones
// function dimensionarArray(filas, columnas, matriz) {
//     matriz = Array(filas);
//     for (i = 0; i < filas; i++) {

//         matriz[i] = Array(columnas);
//     };
// return matriz;
// }

function leerDatos(dimension) {
    matriz = Array(dimension);
    for (i = 0; i < dimension; i++) {

        matriz[i] = Array(dimension);
    };

    for (i = 0; i < dimension; i++) {

        for (j = 0; j < dimension; j++) {

            do {
                matriz[i][j] = Number(prompt("Ingresar numero entero para fila " + i + " columna " + j));

                if (Number.isInteger(matriz[i][j] == false)) {
                    alert("El numero ingresado no es un entero.")
                }
            } while (Number.isInteger(matriz[i][j] == false));
        };
    };

    return matriz
};

function sumarMatrices(m1, m2, dimension) {

    matriz = Array(dimension);
    for (i = 0; i < dimension; i++) {

        matriz[i] = Array(dimension);
    };

    var i, j;
    for (i = 0; i < dimension; i++) {

        for (j = 0; j < dimension; j++) {

            matriz[i][j] = m1[i][j] + m2[i][j];
        };
    };

    return matriz;
};

alert("Ingresar datos para matriz 1")
matriz1 = leerDatos(3);
alert("Ingresar datos para matriz 2")
matriz2 = leerDatos(3);

matrizSumatoria = sumarMatrices(matriz1, matriz2, 3);

console.log("Matriz 1: " , matriz1);
console.log("Matriz 2: " , matriz2);
console.log("Matrices sumadas: " , matrizSumatoria);








