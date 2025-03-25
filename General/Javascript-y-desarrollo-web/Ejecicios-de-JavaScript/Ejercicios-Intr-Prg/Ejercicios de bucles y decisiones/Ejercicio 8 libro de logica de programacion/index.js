// Algoritmo: Invertir las cifras de un numero

var numero;
var resto;
var numeroDescompuesto;
var multiplicar10 = 10;
var contadorMultiplicar10;
var numeroInvertido = 0;
var copiaNumero;
var contadorCifras = 0;
var contador = 0;

// Ingreso de numero y validacion para que sea un numero entero:
do {
    numero = Number(prompt("Ingresar numero entero al que se le van a invertir las cifras:"))
} while (!Number.isInteger(numero));


// Verificar si el numero esta entre -9 y 9
if (!(numero <= 9) || !(numero >= -9)) {


    // analizar si el numero es negativo
    if (numero < 0) {
        // Proceso para saber cuantas cifras tiene un numero y despues ese numero usarlo para reacomodar las cifras.
        copiaNumero = numero*(-1);
        

        while (copiaNumero > 0) {
            cifra = copiaNumero % 10;
            copiaNumero = Math.trunc(copiaNumero / 10);
            contadorCifras = contadorCifras + 1;
        };


        // Proceso para encontrar cada cifra del numero
        numeroDescompuesto = numero*(-1);
    
        do {
            // Poner cada cifra en la posición opuesta
            resto = numeroDescompuesto % 10;
            contadorCifras = contadorCifras - 1;
            numeroInvertido = numeroInvertido + resto * (Math.pow(10, contadorCifras));


            // descomponer el numero quitandole la ultima cifra y guardandolo para que se analice despues sucesivamente
            quitarCifra = numeroDescompuesto / 10;
            numeroDescompuesto = Math.trunc(quitarCifra);

        } while (contadorCifras >= 0);

        // Pasarlo de vuelta a negativo: 
        numeroInvertido = numeroInvertido * (-1);
       
        // Mostrar resultados:
        console.log("El numero invertido de " + numero + " es " + numeroInvertido)


    } else {
        // Si numero > 0
        
        // Proceso para saber cuantas cifras tiene un numero y despues ese numero usarlo para reacomodar las cifras.
        copiaNumero = numero;

        while (copiaNumero > 0) {
            cifra = copiaNumero % 10;
            copiaNumero = Math.trunc(copiaNumero / 10);
            contadorCifras = contadorCifras + 1;
        };


        // Proceso para encontrar cada cifra del numero
        numeroDescompuesto = numero;
        do {
            // Poner cada cifra en la posición opuesta
            resto = numeroDescompuesto % 10;
            contadorCifras = contadorCifras - 1;
            numeroInvertido = numeroInvertido + resto * (Math.pow(10, contadorCifras));


            // descomponer el numero quitandole la ultima cifra y guardandolo para que se analice despues sucesivamente
            quitarCifra = numeroDescompuesto / 10;
            numeroDescompuesto = Math.trunc(quitarCifra);

        } while (contadorCifras >= 0);

        // Mostrar resultados:
        console.log("El numero invertido de " + numero + " es " + numeroInvertido)
    };


} else {
    // Resultado Final si el numero esta entre -9 y 9
    console.log("El resultado de la inversion de cifras es el mismo número: " + numero)
};










