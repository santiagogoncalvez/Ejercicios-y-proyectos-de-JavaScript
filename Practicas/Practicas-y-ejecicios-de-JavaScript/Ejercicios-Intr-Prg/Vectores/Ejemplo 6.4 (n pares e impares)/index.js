/* Algoritmo: Disene un algoritmo que permita almacenar en un vector una cantidad n de numeros pares y en otro vector una cantidad m de
numeros impares ingresados por el usuario. Construya el algoritmo de tal manera que almacene en un tercer vector todos los numeros contenidos en los dos vectores iniciales y muestre al final el tercer vector */

var arregloPares = [];
var arregloImpares = [];
var arregloTotal = [];
var tamanioPares, tamanioImpares, tamanioTotal, i, j, salida;

tamanioPares = Number(prompt("Ingresar tamaño de numeros pares"))
tamanioImpares = Number(prompt("Ingresar tamaño de numeros impares:"))

tamanioTotal = tamanioPares + tamanioImpares;

for (i = 0; i < tamanioPares; i++) {
    do {
        arregloPares[i] = Number(prompt("Ingresar numero par " + i))
        if (arregloPares[i] % 2 != 0) {
            alert("Este numero no es par");
        }
    } while (arregloPares[i] % 2 != 0);
};

for (i = 0; i < tamanioImpares; i++) {
    do {
        arregloImpares[i] = Number(prompt("Ingresar numero impar " + i))
        if (arregloImpares[i] % 2 == 0) {
            alert("Este numero no es impar");
        }
    } while (arregloImpares[i] % 2 == 0);
};

k = 0;
for (j = 0; j < tamanioPares; j++) {
    arregloTotal[k] = arregloPares[j];
    k = k + 1;
}

for (j = 0; j < tamanioImpares; j++) {
    arregloTotal[k] = arregloImpares[j];
    k = k + 1;
}

console.log("La union de los 2 conjuntos es: ");

for (i = 0; i < tamanioTotal; i++) {
    console.log(arregloTotal[i]);
};

