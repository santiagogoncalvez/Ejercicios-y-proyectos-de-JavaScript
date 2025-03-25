// Ejercicios 6.3 - 7

// Variables
var cantNumeros, matrizNumeros;
var filas = 3;
var columnas = 3;

// Funciones
{
    function leerNumeros(filas, columnas) {

        arreglo = Array(filas);
        for (i = 0; i < filas; i++) {
            arreglo[i] = Array(columnas);
        };

        for (i = 0; i < filas; i++) {

            for (j = 0; j < columnas; j++) {
                do {
                    arreglo[i][j] = Number(prompt("Ingresar numero: \nFila: " + i + "\nColumna: " + j))
                } while (Number.isInteger(arreglo[i][j]) == false)
            };
        };

        return arreglo;
    };

    function recorrerArray(filas, columnas, matrizNumeros) {

        for (j = columnas-1; j >= 0; j--) {

            for (i = filas-1; i >= 0; i--) {
                console.log(matrizNumeros[i][j]);
            }
        }
    }
};

matrizNumeros = leerNumeros(filas,columnas);
console.log(matrizNumeros)
recorrerArray(filas, columnas, matrizNumeros);