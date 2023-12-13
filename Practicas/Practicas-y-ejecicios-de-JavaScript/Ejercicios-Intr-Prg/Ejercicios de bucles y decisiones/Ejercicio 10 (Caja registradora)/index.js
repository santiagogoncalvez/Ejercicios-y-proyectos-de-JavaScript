// Algoritmo: caja registradora


// Ingreso de dato de la base del dia

do {
    valorBase = Number(prompt("Ingresar base del día:"));
} while (!Number.isInteger(valorBase))

base = valorBase;
console.log("La base del dia es: " + valorBase)

var ingresos;
var egresos;
var saldoActual = base;

// Menú para realizar operaciones
do {

    do {
        var opcion = prompt("Caja registradora: eliga la accion que desea realizar." + "\n [1]: Ingresar dinero" + "\n [2]: Retirar dinero" + "\n [3]: Ver saldo actual" + "\n [4]: Cerrar caja");
    } while (opcion !== '1' && opcion !== '2' && opcion !== '3' && opcion != '4')

    switch (opcion) {

        // Opcion ingresar dinero
        case "1":

            console.log("\nIngreso de dinero");

            do {
                var cantidadIngresada = Number(prompt("Cantidad ingresada: "));
            } while (!Number.isInteger(cantidadIngresada));

            // Informar cantidad ingresada
            alert("Cantidad ingresada: +" + cantidadIngresada)

            console.log(" Cantidad ingresada: +" + cantidadIngresada);
            var saldoActual = saldoActual + cantidadIngresada;


            break

        // Opcion egresar dinero
        case "2":
            console.log("\nRetiro de dinero");

            do {
                var cantidadEgresada = Number(prompt("Cantidad retirada: "));
            } while (!Number.isInteger(cantidadEgresada));

            // Informar cantidad ingresada
            alert("Cantidad retirada: " + cantidadEgresada)
            console.log(" Cantidad egresada: -" + cantidadEgresada);

            var saldoActual = saldoActual - cantidadEgresada;
            break

        case "3":
            alert("El saldo actual es: " + saldoActual);
            break;

        // Opcion cerrar caja
        case "4":
            continue;


    }

    // Mostrar saldo actual despues de cada operacion
    alert("El saldo actual es: " + saldoActual)

    console.log(" Saldo actual: " + saldoActual);

    // Porcentaje estimado para alertar
    var porcentajeBaseAlerta = base * 0.15;

    // Alerta si el saldo es menor o igual al 15% de la base
    if (saldoActual <= porcentajeBaseAlerta) {
        alert("El saldo es inferior o igual al 15 % de la base asignada" + "\n Base asignada: " + base + "\n Saldo actual: " + saldoActual)
        console.log("  El saldo es inferior o igual al 15 % de la base asignada" + "\n Base asignada: " + base);
    };

} while (opcion != "4")

// Cierre de caja
alert("Cierre de caja" + "\n El saldo final es: " + saldoActual)
console.log("Cierre de caja")
console.log("\n El saldo final es: " + saldoActual);