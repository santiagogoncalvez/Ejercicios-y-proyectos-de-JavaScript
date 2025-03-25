/*Disene un algoritmo que almacene en vectores el nombre y
el genero de un grupo de n personas y, que a traves de funciones permita
buscar la posicion del vector en que se encuentra una persona cualquiera,
buscada por su nombre y el genero que esta persona tiene. Con objeto de
almacenar los generos de manera optima, utilice una ’M’ para Masculino
y una ’F’ para femenino.*/

var estaturasPromF;
var porcentM;
var arregloEstaturas = [];
var arregloGeneros = [];


// Guardar dato estaturas
function leerEstaturas(tamanio) {
    for (i = 0; i < tamanio; i++) {
        arregloEstaturas[i] = Number(prompt("Ingresar estatura de la persona " + i));

    };
    return arregloEstaturas;
};

// Guardar dato de generos
function leerGeneros(tamanio) {

    for (i = 0; i < tamanio; i++) {
        do {
            arregloGeneros[i] = prompt("Ingresar genero de la persona " + i + " (M/F).");
            if (arregloGeneros[i] != 'M' && arregloGeneros[i] != 'm' && arregloGeneros[i] != 'F' && arregloGeneros[i] != 'f') {
                alert("Genero ingresado no válido");
            };

        } while (arregloGeneros[i] != "M" && arregloGeneros[i] != "m" && arregloGeneros[i] != "F" && arregloGeneros[i] != "f");

    };

    return arregloGeneros;
};

// Calcular promedio de estaturas genero femenino.
function promedioEstF(tamanio, arregloEstaturas, arregloGeneros) {
    sumEst = 0;
    contEst = 0

    for (i = 0; i < tamanio; i++) {

        if (arregloGeneros[i] == 'F' || arregloGeneros[i] == 'f') {
            sumEst = sumEst + arregloEstaturas[i];
            contEst = contEst + 1;
        };

    };

    promedio = sumEst / contEst;
    return promedio;

};


// Calcular porcentaje de hombres ingresados.
function porcentajeM(tamanio, arregloGeneros) {
    sumaM = 0;

    // recorrer array buscando genero M
    for (i = 0; i < tamanio; i++) {

        if (arregloGeneros[i] == 'M' || arregloGeneros[i] == 'm') {
            sumaM = sumaM + 1;
        };
    };

    porcentajeFinal = (sumaM / tamanio) * 100;
    return porcentajeFinal;
};

// Mostrar resultados
function resultados(estaturasM, porcentM) {

    console.log("El promedio de estaturas de las mujeres es: " + estaturasM + "\nEl porcentaje de hombres ingresados es: " + porcentM + "%")
}


// Pedir datos
do {
    tamanio = Number(prompt("Ingresar la cantidad de personas:"));
} while (Number.isInteger(tamanio) == false);


arregloEstaturas = leerEstaturas(tamanio);
arregloGeneros = leerGeneros(tamanio);
estaturasPromF = promedioEstF(tamanio, arregloEstaturas, arregloGeneros)
porcentM = porcentajeM(tamanio, arregloGeneros);

resultados(estaturasPromF, porcentM);