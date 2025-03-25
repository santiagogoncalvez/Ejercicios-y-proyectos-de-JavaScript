// Algoritmo: mostrar promedio, mayor nota y menor nota de un vector

var cantNotas;
var arregloNotas = [];

// Funcion mayorNota
function mayorNota1(arregloNotas,cantNotas) {
    var mayorNota;
    var bandera = true;
    
    // bucle 1
    for (i = 0; i < cantNotas; i++) {
        
        if (i == 0) {
            mayorNota = arregloNotas[i];
            bandera = false;
        }
        
        if (i !== 0 && bandera == false) {
            
            if (arregloNotas[i] > mayorNota) {
                mayorNota = arregloNotas[i];
            };
        };
    };

    return mayorNota;
};

// funcion menorNota
function menorNota1(arregloNotas, cantNotas) {
    var menorNota;
    var bandera = true;

    for (i = 0; i < cantNotas; i++) {
        

        if (i == 0) {
            menorNota = arregloNotas[i];
            bandera = false;
        };

        if (i != 0 && bandera == false) {
            if (arregloNotas[i] < menorNota) {
                menorNota = arregloNotas[i];

            };
        };

    };

    return menorNota;

};

// Funcion promedio
function promedio() {
    var promedioTotal = 0;

    for (i = 0; i < cantNotas; i++) {

        promedioTotal =  promedioTotal + arregloNotas [i];
    };

    promedioTotal = promedioTotal / cantNotas;

    return promedioTotal;

};


// Pedir datos
do {
    cantNotas = Number(prompt("Cantidad de notas a ingresar:"));
} while (Number.isInteger(cantNotas) != true);

for (i = 0; i < cantNotas; i++) {
    arregloNotas[i] = Number(prompt("Ingresar nota final " + i + ":"));
}

var mayorNotas = mayorNota1(arregloNotas, cantNotas);
var menorNotas = menorNota1(arregloNotas, cantNotas);
var promedioTotal = promedio(arregloNotas, cantNotas);

console.log("De las notas dadas los restultados son:")
console.log("Promedio: " + promedioTotal + "\nMayor nota: " + mayorNotas + "\nMenor nota: " + menorNotas);