// Algoritmo Cantidad de personas mayores y menores de edad en población hasta 500 habitantes.
var poblacion = 1;
var cantidadMayores = 0;
var cantidadMenores = 0;
var seguir = 'S'

while (seguir == 'S' || seguir == 's') {

    // validacion, no existe alguien con 0 o menos edad
    do {
        edadPersona = prompt("Ingrese edad de la persona: ");
        edadPersona = parseInt(edadPersona);
    } while (edadPersona < 0);

    // Estructura de repeticion para sumar la cantidad de personas mayores y menores.
    if (edadPersona < 18) {
        cantidadMenores = cantidadMenores + 1;
    } else {
        cantidadMayores = cantidadMayores + 1;
    };

    poblacion = poblacion + 1;


    // Establecer limite de ingreso de habitantes.
    if (poblacion <= 500) {

        // Agregar o no agregar mas habitantes
        do {
            seguir = prompt("¿Desea seguir agregando habitantes [S] [N]?: ");
        } while (seguir != 'S' && seguir != 's' && seguir != 'N' && seguir != 'n');

    } else {
        seguir = 'N'
    };

};


// Mostrar resultados
console.log("La cantidad de personas mayores de edad es de: " + cantidadMayores);
console.log("La cantidad de personas menores de edad es: " + cantidadMenores);

// Fin del algoritmo.