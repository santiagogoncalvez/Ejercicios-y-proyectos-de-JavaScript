// Ejercicios 6.3 - 8

// Variables
var filas = 4;
var columnas = 5;
var matrizOriginal, matrizTraspuesta;

// Funciones
{
    // Funcion que lee los datos
    {
        function leerMatrizOriginal(filas, columnas) {

            matriz = Array(filas);
            for (i = 0; i < filas; i++) {
                matriz[i] = Array(columnas);
            }

            for (i = 0; i < filas; i++) {

                for (j = 0; j < columnas; j++) {
                   
                        matriz[i][j] = Number(prompt("Ingresar numero: \nFila: " + i + "\nColumna: " + j))
                    
                };
            };

            return matriz;
        };

        
    }
    
    // funcion matriz traspuesta
    {
        function calcmatrizTraspuesta(filas, columnas, matrizOriginal) {

            var matriz = Array(filas);
            for (i = 0; i < filas; i++) {
                matriz[i] = Array(columnas);
            }

            for (i = 0; i < filas; i++) {

                for (j = 0; j < columnas; j++) {

                    matriz[j][i] = matrizOriginal[i][j]
                };
            }

            return matriz;
        }
    }
}

matrizOriginal = leerMatrizOriginal(filas, columnas);
matrizTraspuesta = calcmatrizTraspuesta(filas, columnas, matrizOriginal);

// Mostrar resultados
console.log(matrizOriginal);
console.log(matrizTraspuesta);
