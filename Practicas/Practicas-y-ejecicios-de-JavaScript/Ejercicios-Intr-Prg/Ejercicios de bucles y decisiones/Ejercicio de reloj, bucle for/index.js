// Simulación de un reloj

var segundo, minuto, hora;

// Bucle de horas
for(hora = 0; hora <= 23; hora++){

    // Bucle de minutos
    for( minuto = 0; minuto <= 59; minuto++) {

        // Bucle de segundos
        for(segundo = 0; segundo <= 59; segundo++) {

            console.log("La hora es " + hora + " : " + minuto + " : "+ segundo)
        }
    }

}

(console.log("\n\n es un nuevo día"))