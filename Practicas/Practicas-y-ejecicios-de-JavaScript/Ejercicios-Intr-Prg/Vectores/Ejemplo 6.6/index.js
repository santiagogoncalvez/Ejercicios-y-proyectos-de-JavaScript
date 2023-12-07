// Algoritmo: mostrar n pares de un vector.

var numerosTotal = [];

cantNum = Number(prompt("Cantidad de numeros a ingresar:"))


for (i = 0; i < cantNum; i++) {
    do {
        numerosTotal[i] = prompt("Ingresar numero " + i)

        if (Number.isInteger(numerosTotal[i]) == false) {
            alert("El numero ingresado no es un entero")
        }
    } while (Number.isInteger(numerosTotal[i]) == false)
}