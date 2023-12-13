// Algoritmo: Comparar diagonales

var matrizInicial, tamaño;

dimension = function dimensonar(tamaño) {

    matriz = Array(tamaño);
    for (i = 0; i < tamaño; i++) {

        matriz[i] = Array(tamaño);
    }
    return matriz;
}

function leerDatos(tamaño, matriz) {
    for (i = 0; i < tamaño; i++) {

        for (j = 0; j < tamaño; j++) {

            // Validacion numeros enteros
            do {
                matriz[i][j] = Number(prompt("Ingresar numero para posicion (" + i + ";" + j + "): "))
            } while (Number.isInteger(matriz[i][j]) == false);
        };
    };

    return matriz;
};

function sumDiagPrinc(tamaño, matriz) {

    suma = 0;
    for (i = 0; i < tamaño; i++) {
        suma = suma + matriz[i][i];
    };
    return suma;

};

// function sumDiagSec(tamaño, matriz) {

//     suma = 0;
//     j = 0;

//     // el ultimo indice es el tamaño ingresado - 1
//     for (i = tamaño - 1; i >= 0; i--) {
//         suma = suma + matriz[j][i];
//         j = j + 1;
//     };
//     return suma;
// };

function sumDiagSec(tamaño, matriz) {

    suma = 0;
    j = tamaño - 1;

    // el ultimo indice es el tamaño ingresado - 1
    for (i = 0; i < tamaño; i++) {
        suma = suma + matriz[i][j];
        j = j - 1;
    };
    return suma;
};

/*
function sumDiagSec(tamaño, matriz) {

    suma = 0;
    columna = tamaño - 1;

    // el ultimo indice es el tamaño ingresado - 1
    for (fila = 0; fila < tamaño; fila++) {
        suma = suma + matriz[fila][columna];
        columna = j - 1;
    };
    return suma;
};
*/


// Ingreso de tamaño de matriz
do {
    tamaño = Number(prompt("Ingresar tamaño de la matriz cuadrada:"));
} while (Number.isInteger(tamaño) == false);

// Dimensionar matriz
matrizInicial = dimension(tamaño);

// Ingresar datos a la matriz
leerDatos(tamaño, matrizInicial);

// Calcular suma de cada diagonal
principal = sumDiagPrinc(tamaño, matrizInicial);
secundaria = sumDiagSec(tamaño, matrizInicial);

// Mostrar resultados
console.log(matrizInicial)

if (principal > secundaria) {
    console.log("La diagonal principal es mayor que la diagonal secundaria.")
} else {
    if (secundaria > principal) {
        console.log("La diagonal secundaria es mayor que la principal.")
    } else {
        console.log("La suma de las 2 diagonales es igual.")
    };
};