// Imortar json que contiene todos los lenguajes
import codigos from './Archivos-JSON/Codigos-de-escritura.json' assert { type: 'json' };
import probabilidadesCodigos from './Archivos-JSON/Probabilidades-codigos-escritura.json' assert {type: 'json'};

// Metodos de caracteres:
import {caracteresMetodos} from './pruebas.js/caracteres-metodos-modulo.mjs';

// Informacion
{
    // Primer caracter UNICODE utilizado por los lenguajes: 65
    // Ultimo caracter UNICODE utilizado por los lenguajes: 195101
    // Cantidad de lenguajes: 139
    // Ponderacion : 1 / 139 == 0,007
}

// Variables
const SCRIPTS = codigos;
const simbolo = document.getElementById("simbolo");
const inputRespuesta = document.getElementById("respuesta");
const inputBotonRespuesta = document.getElementById("boton-respuesta");
const parrafoVerdadRespuesta = document.getElementById("parrafo-verdad-respuesta");
const botonResetear = document.getElementById("boton-resetear");
const rangosProbabilidades = probabilidadesCodigos;
const listaDatos = document.getElementById("datos-lenguaje")

// Simbolo aleatorio
let simboloAleatorio = caracteresMetodos.simboloAleatorioLeng(rangosProbabilidades);
let codigoActual = caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio);
console.log(caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio).name);

// Introducir el simbolo aleatorio en el elemento html
simbolo.innerText = String.fromCodePoint(simboloAleatorio);



// Eventos
// Agregar evento de click al boton
inputBotonRespuesta.addEventListener('click', function () {

    const textoIngresado = inputRespuesta.value;

    if (textoIngresado.toLowerCase() == caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio).name.toLowerCase()) {
        parrafoVerdadRespuesta.innerText = "Verdadero";
        caracteresMetodos.mostrarDatosLenguaje(codigoActual, listaDatos);
    } else { parrafoVerdadRespuesta.innerText = "Falso"; 
};

    inputRespuesta.value = "";
});

// Agregar evento al presionar enter en el input de respuesta
inputRespuesta.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        const textoIngresado = inputRespuesta.value;
        if (textoIngresado.toLowerCase() == caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio).name.toLowerCase()) {
            parrafoVerdadRespuesta.innerText = "Verdadero";
            caracteresMetodos.mostrarDatosLenguaje(codigoActual, listaDatos);
        } else { 
            parrafoVerdadRespuesta.innerText = "Falso"; 
        };

        inputRespuesta.value = "";
    }
});


// Resetear simbolo y respuesta
botonResetear.addEventListener('click', function () {
    simboloAleatorio = caracteresMetodos.simboloAleatorioLeng(rangosProbabilidades);
    console.log("Simbolo " + simboloAleatorio);
    simbolo.innerText = String.fromCodePoint(caracteresMetodos.simboloAleatorioLeng(rangosProbabilidades));
    inputRespuesta.value = "";
    parrafoVerdadRespuesta.innerText = "";
    console.log(caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio).name);

});


// Mostrar los datos del lenguaje actual





