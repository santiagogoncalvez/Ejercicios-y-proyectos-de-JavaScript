// Algoritmo: evaluar si un numero n esta dentro o fuera de 3 intervalos dados por el usuario

// funcion evaluar n
function evaluarN(n, minimoValor, maximoValor) {
    var bandera = 0;
    minimoValorCop = minimoValor;
    maximoValorCop = maximoValor;

    for (minimoValorCop = minimoValorCop + 1; minimoValorCop < maximoValorCop; minimoValorCop++) {
        if (n == minimoValorCop) {
            var bandera = 1;
        }
    }

    if (bandera == 0) {
        // 0 = no pertenece
        return 0;
    } else {
        // 1 = pertenece
        return 1;
    }

}

// Intervalo1
alert("Primer intervalo");
do {
    minimoValor1 = Number(prompt("Ingresar minimo valor de un intervalo"));
    maximoValor1 = Number(prompt("Ingresar maximo valor de un intervalo"));
} while (minimoValor1 > maximoValor1);

// Intervalo2
{
    alert("Segundo intervalo");
    do {
        minimoValor2 = Number(prompt("Ingresar minimo valor de un intervalo"));
        maximoValor2 = Number(prompt("Ingresar maximo valor de un intervalo"));
    } while (minimoValor2 > maximoValor2);
}

// intervalo3
{
    alert("Tercer intervalo")
    do {
        minimoValor3 = Number(prompt("Ingresar minimo valor de un intervalo"));
        maximoValor3 = Number(prompt("Ingresar maximo valor de un intervalo"));
    } while (minimoValor3 > maximoValor3);
}

// n
do {
    n = Number(prompt("Ingresar numero entero para evaluar si esta o no dentro del intervalo dado:"))
} while (Number.isInteger(n) != true)

intervalo1 = evaluarN(n, minimoValor1, maximoValor1);
intervalo2 = evaluarN(n, minimoValor2, maximoValor2);
intervalo3 = evaluarN(n, minimoValor3, maximoValor3);

if (intervalo1 == 1) {
    console.log(n, " pertenece al intervalo (", minimoValor1, ";", maximoValor1, ").")
} else {
    if (intervalo2 == 1) {
        console.log(n, " pertenece al intervalo (", minimoValor2, ";", maximoValor2, ").")
    } else {
        if (intervalo3 == 1) {
            console.log(n, " pertenece al intervalo (", minimoValor3, ";", maximoValor3, ").")
        } else {
            console.log("El numero ", n, " no pertenece a ninguno de los intervalos dados.")
        }
    }
}



