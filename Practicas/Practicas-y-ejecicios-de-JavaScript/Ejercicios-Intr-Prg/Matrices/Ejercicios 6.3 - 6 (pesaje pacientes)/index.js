// Ejercicios 6.3 - 6

// variables
var cantPersonas, arregloNombres, matrizPesos, pesosGanPer, cantPerPeso, cantObjAlc, arregloObjetivos
var cantPesos = 3;
var pesos = ["inicial", "intermedio", "final"];

// Funciones
{
    // Funcion para leer los nombres
    {
        function leerNombres(tamanio) {
            alert("Ingreso de nombres")
            nombres = Array(tamanio);

            for (i = 0; i < tamanio; i++) {
                nombres[i] = prompt("Ingresar nombre del paciente " + i);
            };

            return nombres;

        };
    }

    // Funcion leer pesos
    {
        function leerPesos(cantPersonas, cantPesos, nombres, pesos) {
            alert("Ingreso de pesos")
            // dimensionar arreglo
            arreglo = Array(cantPersonas);

            for (i = 0; i < cantPersonas; i++) {
                arreglo[i] = Array(cantPesos);
            };

            for (i = 0; i < cantPersonas; i++) {

                for (j = 0; j < cantPesos; j++) {
                    do {
                        arreglo[i][j] = Number(prompt("Paciente: " + nombres[i] + "\nIngresar peso " + pesos[j]));
                    } while (arreglo[i][j] < 0);

                };
            };

            return arreglo;
        };
    };

    // Funcion para leer los objetivos
    {
        function leerObjetivos(tamanio, arregloNombres) {
            alert("Ingreso de objetivos")
            nombres = Array(tamanio);

            for (i = 0; i < tamanio; i++) {
                do {
                    nombres[i] = prompt("Ingresar objetivo del paciente: " + arregloNombres[i] + ": \nBajar de peso [bajar] \nSubir de peso[subir]");
                } while (nombres[i] != "subir" && nombres[i] != "bajar");
            };

            return nombres;

        };
    }

    // Funcion que determina ganancia o perdida de peso desde el inicio
    {
        function calcGanPerdPeso(cantPersonas, cantPesos, matrizPesos) {

            arreglo = Array(cantPersonas);

            for (i = 0; i < cantPersonas; i++) {

                arreglo[i] = matrizPesos[i][cantPesos - 1] - matrizPesos[i][0];
            };

            return arreglo;
        }
    }

    // Funcion que determina cuantos pacientes perdieron peso entre el inicio e intermedio
    {
        function calcperdPesoInt(cantPersonas, cantPesos, matrizPesos,) {

            cantidad = 0;

            for (i = 0; i < cantPersonas; i++) {

                if (matrizPesos[i][1] < matrizPesos[i][0]) {
                    cantidad = cantidad + 1;
                }
            }

            return cantidad;
        }
    }

    // Funcion que determina cuantas personas cumplieron su objetivo
    {
        function calcObjetivos(cantPersonas, arregloObjetivos, matrizPesos) {
            suma = 0;

            for (i = 0; i < cantPersonas; i++) {

                if (arregloObjetivos[i] == "subir" && matrizPesos[i][cantPersonas - 1] > matrizPesos[i][0]) {
                    suma = suma + 1;
                };

                if (arregloObjetivos[i] == "bajar" && matrizPesos[i][cantPersonas - 1] < matrizPesos[i][0]) {
                    suma = suma + 1;
                };
            };

            return suma;
        };
    };
};

// Pedir datos
{
    do {
        cantPersonas = Number(prompt("Ingresar cantidad de pacientes:"))
    } while (Number.isInteger(cantPersonas) == false);

    arregloNombres = leerNombres(cantPersonas);
    arregloObjetivos = leerObjetivos(cantPersonas, arregloNombres);
    matrizPesos = leerPesos(cantPersonas, cantPesos, arregloNombres, pesos);
};

// Obtener resultados
{
    // ganancia o perdida de peso desde el inicio
    pesosGanPer = calcGanPerdPeso(cantPersonas, cantPesos, matrizPesos);

    // cuantos pacientes perdieron peso entre el inicio e intermedio
    cantPerPeso = calcperdPesoInt(cantPersonas, cantPerPeso, matrizPesos);

    // cuantas personas cumplieron su objetivo
    cantObjAlc = calcObjetivos(cantPersonas, arregloObjetivos, matrizPesos);
}

// Mostrar resultados
{
    // Personas objetivo y pesos de cada una
    {
        console.log("Pacientes ingresados:")
        for (i = 0; i < cantPersonas; i++) {

            console.log("Paciente " + arregloNombres[i] + ":")
            for (j = 0; j < cantPesos; j++) {
                console.log("Peso " + pesos[j] + ":" + matrizPesos[i][j])
            }

            console.log("");
        };
        console.log("<------------------------------------>");
    };

    // ganancia o perdida de peso desde el inicio
    
    {
        console.log("Ganancias o perdidas de peso:")
        for (i = 0; i < cantPersonas; i++) {


            if (pesosGanPer[i] > 0) {
                console.log("Paciente " + arregloNombres[i] + " gano: " + pesosGanPer[i]);
            } else {
                console.log("Paciente " + arregloNombres[i] + " perdio: " + pesosGanPer[i]);
            };

        };
        console.log("<------------------------------------>");

    };

    {
        console.log("Perdida de peso entre inicio e intermedio:");
        console.log("Cantidad de pacientes que perdieron peso entre el inicio e intermedio: " + cantPerPeso)
    }

    // personas que cumplieron su objetivo
    {
        console.log("Objetivos:")
        console.log("Cantidad de pacientes que cumplieron su objetivo: " + cantObjAlc)
        console.log("<------------------------------------>");
    };
}


