// Algoritmo: Registro de caminata
var minCam;
var dia = 1;
var semana = 1;
var mes = 1;
var tiempCamin = 0
var primerTiempo;
var menorTiempo, mayorTiempo
var caminadoPorSemana = 0;
var tiempCaminMes = 0;
// Ciclo de mes
for (mes = 1; mes <= 1; mes++) {

    // Ciclo de semana
    for (semana = 1; semana <= 4; semana++) {
        // Ciclo de dia
        for (dia = 1; dia <= 3; dia++) {

            // Guardar un dato para la primera ejecucion.
            var minCam = Number(prompt("\nTiempo caminado para: \nDia " + dia + ", semana " + semana + ", mes " + mes + "."));

            if (dia == 1 && semana == 1 && mes == 1) {
                primerTiempo = minCam;
                menorTiempo = primerTiempo;
                mayorTiempo = primerTiempo;
            };

            // Ver cual es el mayor y el menor tiempo: 
            if (!(dia == 1 && semana == 1 && mes == 1)) {

                if (!(minCam == mayorTiempo)) {
                    if (minCam > mayorTiempo) {
                        mayorTiempo = minCam;
                    } else {
                        menorTiempo = minCam;
                    }
                }
            };

            // Tiempo total caminado
            var tiempCamin = tiempCamin + minCam;

            // Tiempo caminado por cada semana
            caminadoPorSemana = caminadoPorSemana + minCam;

            // Tiempo caminado por mes
            tiempCaminMes = tiempCaminMes +  tiempCamin;



            // Registro de datos
            console.log("Tiempo caminado para: \nDia " + dia + ", semana " + semana + ", mes " + mes + ": " + minCam + " minutos.");


        };

        //tiempo caminado por semana
        console.log("Tiempo caminado en semana " + semana + ":" + "\n" + caminadoPorSemana + " minutos.");

        // Promedio de minutos por semana
        let promedioSem = caminadoPorSemana / 3;
        console.log("\nEl promedio de minutos caminados en la semana " + semana + " es: " + promedioSem);

        // Restablecer valor par el tiempo por cada semana
        caminadoPorSemana = 0;

    };

    // Promedio minutos por mes:
    var promedioMes = tiempCamin / 4;
    console.log("El promedio de minutos caminados en el mes ", mes, " es: " + promedioMes);
    tiempCaminMes = 0;

}

mes = mes - 1;
// Promedio caminado de los 4 meses:
let promedio4Mes = tiempCamin / 4;
console.log("El promedio de minutos caminados en " + mes + " meses es: " + promedio4Mes)

console.log("El mayor tiempo fue: " + mayorTiempo + " minutos.", "\nEl menor tiempo fue: ", menorTiempo, " minutos.")