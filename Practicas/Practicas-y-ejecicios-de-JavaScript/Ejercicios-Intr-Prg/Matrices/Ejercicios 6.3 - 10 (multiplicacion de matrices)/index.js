// Ejercicios 6.3 - 10

// variables
var filasM1, columnasM1, filasM2, columnasM2;
var matrizA, matrizB, matrizProducto;

// Funciones
{
    // Leer dimesnsiones de cada matriz;

    {
        function leerDimensiones() {
            alert("Algoritmo multiplicacion de matrices. \nPara que se pueda realizar la operacion el numero de columnas de la primer matriz debe ser igual al numero de filas de la segunda matriz.")

            do {

                alert("Primera matrziz")
                do {
                    filasM1 = Number(prompt("Ingresar numero de filas de la primera matriz:"))
                } while (Number.isInteger(filasM1) == false);

                do {
                    columnasM1 = Number(prompt("Ingresar numero de columnas de la primera matriz:"))
                } while (Number.isInteger(filasM1) == false);


                alert("Segunda matriz")
                do {
                    filasM2 = Number(prompt("Ingresar numero de filas de la segunda matriz:"))
                } while (Number.isInteger(filasM1) == false);

                do {
                    columnasM2 = Number(prompt("Ingresar numero de columnas de la segunda matriz:"))
                } while (Number.isInteger(filasM1) == false);

                if (columnasM1 != filasM2) {
                    alert("El numero de columnas de la primer matriz debe ser igual al numero de filas de la segunda matriz")
                }


            } while (columnasM1 != filasM2);
        };
    }

    // Leer datos en una matriz
    {
        function leerDatos(filas, columnas) {
            alert("Ingresar datos en la matriz")
            matriz = Array(filas);
            for (i = 0; i < filas; i++) {
                matriz[i] = Array(columnas);
            };

            for (i = 0; i < filas; i++) {

                for (j = 0; j < columnas; j++) {

                    do {
                        matriz[i][j] = Number(prompt("Ingresar numero: \nFila: " + i + "\nColumna: " + j))
                    } while (Number.isInteger(matriz[i][j]) == false);
                };
            };

            return matriz;
        };
    }

    // Funcion multiplicacion de matrices
    {
        function multiplicacionMatrices(matrizA, matrizB, filasM1, columnasM1, filasM2, columnasM2) {


            matrizProducto = Array(filasM1);
            for (i = 0; i < filasM1; i++) {
                matrizProducto[i] = Array(columnasM2);
            };

            // Multiplicacion
            for (i = 0; i < filasM1; i++) {

                for (j = 0; j < columnasM2; j++) {
                    var suma = 0;

                    for (k = 0; k < columnasM1; k++) {

                        suma = suma + (matrizA[i][k] * matrizB[k][j]);
                        matrizProducto[i][j] = suma;
                    };
                };
            };

            return matrizProducto;
        }
    }

};

leerDimensiones();
matrizA = leerDatos(filasM1, columnasM1);
matrizB = leerDatos(filasM2, columnasM2);
matrizProducto = multiplicacionMatrices(matrizA, matrizB, filasM1, columnasM1, filasM2, columnasM2);

// Mostrar resultados
console.log("Matriz A: ");
console.log(matrizA);

console.log("Matriz B: ");
console.log(matrizB);

console.log("Matriz producto de las matrices ingresadas es: ");
console.log(matrizProducto);

