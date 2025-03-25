// Ejercicio 6.3 - 5

var arregloNombres, arregloNotas, cantPersonas, cantNotas;
var promediosEstudiantes, mayorPromedio, estudiantesMatPer, estudiantesMatHab, cantMateriaGanada;

// funciones
{
    // Funcion para leer los nombres
    function leerNombres(tamanio) {
        alert("Ingreso de nombres")
        nombres = Array(tamanio);

        for (i = 0; i < tamanio; i++) {
            nombres[i] = prompt("Ingresar nombre del alumno " + i);
        };

        return nombres;

    };

    // Funcion para leer las notas
    function leerNotas(cantFilas, cantPesos, nombres) {
        alert("Ingreso de notas")
        // dimensionar arreglo
        arreglo = Array(cantFilas);

        for (i = 0; i < cantFilas; i++) {
            arreglo[i] = Array(cantPesos);
        };

        for (i = 0; i < cantFilas; i++) {

            for (j = 0; j < cantPesos; j++) {
                do {
                    arreglo[i][j] = Number(prompt("Alumno: " + nombres[i] + "\nIngresar nota numero " + j));
                } while (arreglo[i][j] < 0 || arreglo[i][j] > 5);

            };
        };

        return arreglo;
    };

    // Funcion para sacar los promedios de cada estudiante
    function promedio(cantPersonas, cantNotas, arregloNotas) {

        promedios = [];

        for (i = 0; i < cantPersonas; i++) {

            sumaNotas = 0;
            for (j = 0; j < cantNotas; j++) {

                sumaNotas = sumaNotas + arregloNotas[i][j];
            }
            promedios[i] = sumaNotas / cantNotas;
        };

        return promedios;
    };

    // Funcion para calcular el mayor promedio
    function calcMayorDefinitiva(cantPersonas, promedios, arregloNombres) {

        var mayorDef;
        var persona = [];

        for (i = 0; i < cantPersonas; i++) {

            if (i == 0) {
                mayorDef = promedios[i];
                persona[0] = arregloNombres[i];
                persona[1] = promedios[i]

            }

            if (promedios[i] > mayorDef) {
                // mayorDef = promedios[i];
                persona[0] = arregloNombres[i];
                persona[1] = promedios[i];


            };
        };

        return persona;
    };

    // Funcion para calcular los alumnos que perdieron la materia
    function calcMateriaPerdida(cantPersonas, promediosEstudiantes, arregloNombres) {

        nombres = [];

        for (i = 0; i < cantPersonas; i++) {

            if (promediosEstudiantes[i] < 2.0) {
                nombres[i] = arregloNombres[i];
            };
        };

        return nombres;
    };

    // Funcion para calcular los alumnos que habilitaron la materia
    function calcMateriaHabilitada(cantPersonas, promediosEstudiantes, arregloNombres) {

        nombres = [];
        j = 0;
        for (i = 0; i < cantPersonas; i++) {

            if (promediosEstudiantes[i] >= 2.0 && promediosEstudiantes[i] < 3.0) {
                nombres[j] = arregloNombres[i];
                j = j + 1;
            };
        };

        if (nombres.length == 0) {
            return "ninguno"
        } else {
            return nombres;
        };
    };

    // funcion para calcular los alumnos que ganaron la materia
    function calcMateriaGanada(cantPersonas, promediosEstudiantes, arregloNombres) {

        nombres = 0;

        for (i = 0; i < cantPersonas; i++) {

            if (promediosEstudiantes[i] > 3.0) {
                nombres = nombres + 1;
            };
        };

        return nombres;
    };
}


// Ingreso de datos
{
    do {
        cantPersonas = Number(prompt("Ingresar cantidad de alumnos:"))
    } while (Number.isInteger(cantPersonas) == false);

    do {
        cantNotas = Number(prompt("Ingresar cantidad de notas por alumno: "))
    } while (Number.isInteger(cantNotas) == false)

    arregloNombres = leerNombres(cantPersonas);
    arregloNotas = leerNotas(cantPersonas, cantNotas, arregloNombres);
}

// Calcular consignas
{
    // a)
    promedios = promedio(cantPersonas, cantNotas, arregloNotas);

    // b)
    mayorPromedio = calcMayorDefinitiva(cantPersonas, promedios, arregloNombres);

    // c)
    estudiantesMatPer = calcMateriaPerdida(cantPersonas, promedios, arregloNombres);

    // d)
    estudiantesMatHab = calcMateriaHabilitada(cantPersonas, promedios, arregloNombres);

    // e)
    cantMateriaGanada = calcMateriaGanada(cantPersonas, promedios, arregloNombres)
}


// Mostrar resultados
{
    // Mostrar alumnos ingresados
    {
        console.log("Los nombres de los alumnos ingresados son: " + arregloNombres);
        console.log("<--------------------->")
    }

    // Mostrar notas
    {
        console.log("Notas:")
        for (i = 0; i < cantPersonas; i++) {

            console.log("");
            console.log("Alumno " + arregloNombres[i] + ":")

            for (j = 0; j < cantNotas; j++) {
                console.log("Nota " + j + ": " + arregloNotas[i][j]);
            };
        };
    }

    // Mostrar promedios de cada estudiante
    {
        console.log("<--------------------->")
        for (i = 0; i < cantPersonas; i++) {
            console.log("Alumno " + arregloNombres[i] + " promedio: " + promedios[i])
        };
    }

    // Mostrar el mayor promedio
    {
        console.log("Alumno con mayor promedio " + mayorPromedio[0] + "\nPromedio: " + mayorPromedio[1]);
    }

    // Mostrar estudiantes que perdieron la materia
    console.log("Los estudiantes que perdieron la materia son: " + estudiantesMatPer);

    // Mostrar estudiantes que habilitaron la materia
    console.log("Los estudiantes que habilitaron la materia son: " + estudiantesMatHab);

    // Mostrar cantidad de personas que ganaron la materia
    console.log("La cantiad de estudiantes que ganaron la materia es: " + cantMateriaGanada);
}


