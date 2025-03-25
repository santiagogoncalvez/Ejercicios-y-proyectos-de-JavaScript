// Algoritmo: invertir las posiciones de los valores de un vector.

var numero = [];
var numero2 = []
var i, cantNomb;

// Ingresar cantidad
do {
    cantNomb = Number(prompt("Cantidad de numeros a ingresar:"))
} while (Number.isInteger(cantNomb) == false);

for (i = 0; i < cantNomb; i++) {
    do {
        numero[i] = prompt("Ingresar numero positivo: " + i);

        if (numero[i] < 0) {
            alert("El numero ingresado no es positivo")
        }
    } while (numero[i] < 0)
}

cantNombCop = cantNomb
for (i = 0; i < cantNomb; i++) {
    numero2[cantNombCop] = numero[i];
    cantNombCop = cantNombCop - 1;
}

console.log("El primer conjunto es: " + numero)
console.log("El segundo conjunto invertido es: " + numero2)
