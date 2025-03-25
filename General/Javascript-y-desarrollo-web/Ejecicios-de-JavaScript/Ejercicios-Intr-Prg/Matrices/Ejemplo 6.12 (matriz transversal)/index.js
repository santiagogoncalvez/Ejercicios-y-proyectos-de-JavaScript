// Algoritmo: matriz transversal

var matrizInicial = [];
var matrizTraspuesta = [];
var filas, columnas, i, j;
var cadena1, cadena2;

// Pedir numero de filas
do {
    filas = Number(prompt("Ingresar numero de filas de la matriz:"));
} while (Number.isInteger(filas) == false);

// Pedir numero de columnas
do {
    columnas = Number(prompt("Ingresar numero de columnas de la matriz:"));
} while (Number.isInteger(columnas) == false);

// Dimensionar matriz, cada posicion del vector en otro vector
matrizInicial = Array(filas);
for (i = 0; i < filas; i++) {

    matrizInicial[i] = Array(columnas);
};

matrizTraspuesta = Array(columnas);
for (i = 0; i < filas; i++) {

    matrizTraspuesta[i] = Array(filas);
};


// Ingresar datos de cada posicion de la matriz
for (i = 0; i < filas; i++) {

    for (j = 0; j < columnas; j++) {

        matrizInicial[i][j] = Number(prompt("Ingresar numero para fila " + i + " columna " + j));
    };
};



// Calcular matriz traspuesta de la original
for (i = 0; i < filas; i++) {

    for (j = 0; j < columnas; j++) {
        matrizTraspuesta[j][i] = matrizInicial[i][j];
    };
};

// Imprimir resultados
console.log("La matriz inicial es: ")
for (i = 0; i < filas; i++) {

    for(j = 0; j < columnas; j++) {

        console.log(matrizInicial[i][j])
    };
    console.log("\n")
};

console.log("La matriz traspuesta de la matriz inicial es: ")

for (i = 0; i < filas; i++) {

    for(j = 0; j < columnas; j++) {

        console.log(matrizTraspuesta[i][j])
    };
    console.log("\n")

};

cadena1 = " ";

for (i = 0; i < filas; i++) {

    for (j = 0; j < columnas; j++) {

        cadena1 = cadena1 + matrizInicial[i][j].toString();
    };
    cadena1 = cadena1 + " ";
};

console.log(cadena1);

