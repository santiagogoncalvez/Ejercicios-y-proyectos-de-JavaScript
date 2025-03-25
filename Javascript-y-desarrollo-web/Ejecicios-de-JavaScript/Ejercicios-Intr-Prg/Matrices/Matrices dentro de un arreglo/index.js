// Matrices dentro de un arreglo

{
    var arregloMatrices;
    var cantMatrices = 2
    var filas = 2;
    var columnas = 2;

    arregloMatrices = Array(cantMatrices);
    for (i = 0; i < cantMatrices; i++) {
        
        arregloMatrices[i] = Array(filas);
        
        for(h = 0; h < columnas; h++) {
            arregloMatrices[i][h] = Array(columnas);
        };
    };
    



        for (i = 0; i < filas; i++) {

            for (j = 0; j < columnas; j++) {

                arregloMatrices[0][i][j] = 1;
            }

        };

        for (i = 0; i < filas; i++) {

            for (j = 0; j < columnas; j++) {

                arregloMatrices[1][i][j] = 1;
            }

        };
    

}

console.log(arregloMatrices)