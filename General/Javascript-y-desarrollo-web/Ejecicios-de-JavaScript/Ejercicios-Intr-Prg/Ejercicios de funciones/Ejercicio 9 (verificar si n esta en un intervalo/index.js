// Algoritmo: ver si un numero n se encuentra dentro del intervalo cerrado [minimoValor, Maximo valor]
var minimoValor, maximoValor;

function evaluarN(n, minimoValor, maximoValor) {
    var bandera = 0;
    minimoValorCop = minimoValor;
    maximoValorCop = maximoValor;

    for (minimoValorCop; minimoValorCop <= maximoValorCop; minimoValorCop++) {
        if (n == minimoValorCop) {
            var bandera = 1;
        }
    }

    if (bandera == 0) {
        return  "no esta dentro del intervalo";
    } else {
        return "esta dentro del intervalo";
    }
    
}


do {minimoValor = Number(prompt("Ingresar minimo valor de un intervalo"));
maximoValor = Number(prompt("Ingresar maximo valor de un intervalo"));
} while (minimoValor > maximoValor);

do{
    n = Number(prompt("Ingresar numero entero para evaluar si esta o no dentro del intervalo dado:"))
} while (Number.isInteger(n) != true)

console.log("El numero ", n, " ", evaluarN(n,minimoValor,maximoValor))

