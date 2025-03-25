// var minuto, segundo;

// for ( minuto = 0; minuto <= 59; minuto++) {
//     for (segundo = 0; segundo <= 59; segundo++) {
//         console.log(minuto + " : " + segundo)
//     }
// }


var minuto, segundo;

valorMinuto = Number(prompt("Ingresar tiempo en minutos:"));
valorSegujndo = Number(prompt("Ingresar tiempo en segundos:"))
bandera = true;

for (minuto = valorMinuto; minuto >= 0; minuto--) {
    if (minuto == 4) {
        console.log("Quedan 5 minutos.")
    }
    if (bandera == true) {
        for (segundo = valorSegujndo; segundo >= 0; segundo--) {
            console.log(minuto + " : " + segundo)
            bandera = false;
        }
    } else {
        for (segundo = 59; segundo >= 0; segundo--) {
            console.log(minuto + " : " + segundo)
        }
    }
}