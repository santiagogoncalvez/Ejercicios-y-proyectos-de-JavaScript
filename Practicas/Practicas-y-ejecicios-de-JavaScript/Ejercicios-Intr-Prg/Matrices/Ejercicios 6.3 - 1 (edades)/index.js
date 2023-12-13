/*Algoritmo:
Escriba un algoritmo en pseudocodigo que permita almacenar en
arreglos diferentes los nombres, los generos y las edades de un grupo
de n personas.
a. Cuantas personas son de genero masculino
b. Cuantas personas de genero femenino superan la mayorıa de
edad
c. Cual es el promedio de edad de las personas de genero masculino
d. Cual es el nombre de la persona de genero femenino mas
pequeña.*/

var cantPersonas, arregloNombres, arregloGeneros, arregloEdades;
var cantM, cantFMayores, promEdadM, nomMenorF;

// Leer datos ingresados
function leerDatos(cantPersonas, tipo) {

    arreglo = Array(cantPersonas);

    if (tipo == 'edad') {
        for (i = 0; i < cantPersonas; i++) {
            arreglo[i] = Number(prompt("Ingresar " + tipo + " de persona " + i + ":"));
        };
    } else {
        for (i = 0; i < cantPersonas; i++) {
            arreglo[i] = prompt("Ingresar " + tipo + " de persona " + i + ":").toUpperCase();
        };
    };

    return arreglo;
};

// Funcion cantidad de personas de genero masculino
function cantidadGenero(tamaño, arreglo) {

    suma = 0;
    for (i = 0; i < tamaño; i++) {
        if (arreglo[i].toUpperCase() == 'M') {
            suma = suma + 1;
        };
    };
    return suma;
};

// Funcion cantidad de personas de genero femenino superan la mayoria de edad.
function cantidadMayores(tamaño, arreglo, arreglo2) {

    suma = 0;
    for (i = 0; i < tamaño; i++) {

        if (arreglo2[i].toUpperCase() == 'F') {
            if (arreglo[i] >= 18) {
                suma = suma + 1;
            };
        }
    };
    return suma;
};

// Funcion promedio de edades (Genero masculino)
function promedioEdades(tamaño, arreglo, arreglo2) {

    suma = 0
    contador = 0;
    for (i = 0; i < tamaño; i++) {

        if (arreglo2[i].toUpperCase() == 'M') {
            suma = suma + arreglo[i];
            contador = contador + 1;
        };
    };

    promedio = suma / contador;
    return promedio;
};

// Funcion nombre de la persona de genero femenino mas pequeña.
function nombreMenorEdad(tamaño, arregloN, arregloE, arregloG ) {

    // Buscar persona con menor edad en arreglo edades;
    var personaMenorEdad;
    var bandera = true; 
    for (i = 0; i < tamaño; i++) {

        if (arregloG[i].toUpperCase() == 'F') {
            
            //Error que tuve: ejecutar por la primera vez usando el indice 0 pero quizas el primer indice no es un genero 
            //femenino entonces nunca se va a ejecutar le primera variable para comparar edades.
            
            if (bandera == true) {
                personaMenorEdad = i;
                bandera = false;
            };

            if (i != 0) {
                if (arregloE[i] < arregloE[personaMenorEdad]) {
                    personaMenorEdad = i;
                };
            };
        };
    };

    // Buscar nombre de esa persona en arreglo nombres
    nombre = arregloN[personaMenorEdad];

    return nombre;
};

// Ingresar cantidad de personas
do {
    cantPersonas = Number(prompt("Ingresar cantidad de personas:"));
} while (Number.isInteger(cantPersonas) == false);

// Leer datos
arregloNombres = leerDatos(cantPersonas, 'nombre');
arregloEdades = leerDatos(cantPersonas, 'edad');
arregloGeneros = leerDatos(cantPersonas, 'genero');

cantM = cantidadGenero(cantPersonas, arregloGeneros);
cantFMayores = cantidadMayores(cantPersonas, arregloEdades, arregloGeneros);
promEdadM = promedioEdades(cantPersonas, arregloEdades, arregloGeneros);
nomMenorF = nombreMenorEdad(cantPersonas, arregloNombres, arregloEdades, arregloGeneros);

console.log("cantidad de personas de genero masculino: "+ cantM);
console.log("Cantidad de personas de genero femenino que superan la mayoria de edad: "+ cantFMayores);
console.log("promedio de edades (Genero masculino): " + promEdadM);
console.log("nombre de la persona de genero femenino mas pequeña: " + nomMenorF);
