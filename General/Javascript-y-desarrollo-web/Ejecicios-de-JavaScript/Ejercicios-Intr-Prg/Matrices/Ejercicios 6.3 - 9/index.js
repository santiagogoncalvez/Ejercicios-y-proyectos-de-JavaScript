// Ejercicio 6.3 - 9

var matriz1_0;
var filas = 5;
var columnas = 5;

// Funciones
{
    function unosYceros(filas, columnas) {

        matriz = Array(filas);
        for (i = 0; i < filas; i++) {
            matriz[i] = Array(columnas);
        };

        for (i = 0; i < filas; i++) {

            for (j = 0; j < columnas; j++) {

                if (i == 0 || i == filas - 1 || j == 0 || j == columnas - 1) {
                    matriz[i][j] = 1;
                } else {
                    matriz[i][j] = 0;
                }

            };
        };

        return matriz;
    }
}

matriz1_0 = unosYceros(filas, columnas);
console.log(matriz1_0);
