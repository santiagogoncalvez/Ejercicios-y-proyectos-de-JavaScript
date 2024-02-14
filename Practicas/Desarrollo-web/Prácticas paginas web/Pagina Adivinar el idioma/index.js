/*
Mejorar la pagina, cambiar idea:
mostrar un pais en imagen y que tengan que adivinar que idioma se habla en ese pais. es mas actual y no tan complicado como adivinar simbolos.
Con el mismo formato de escribir el nombre y si es verdadero mostrarle informacion sobre el pais e informacion sobre el idioma. Y despues hacer un modo que sea al rever. te muestre el idioma y tenes que ubicarlo en un mapa terraqueo.
*/

// Imortar json que contiene todos los lenguajes
import {codigos} from './Archivos-JSON/Codigos-de-escritura.mjs';
import { unicodeAleatorio } from "./pruebas.js/caracteres-unicode-arial.mjs";

// // Metodos de caracteres:
import { caracteresMetodos } from './caracteres-metodos-modulo.mjs';


// Informacion
{
    // Primer caracter UNICODE utilizado por los lenguajes: 65
    // Ultimo caracter UNICODE utilizado por los lenguajes: 195101
    // Cantidad de lenguajes: 139
    // Ponderacion : 1 / 139 == 0,007
}

// Variables
const SCRIPTS = codigos;
const simboloClase = document.getElementById("simbolo");
const inputRespuesta = document.getElementById("respuesta");
const inputBotonRespuesta = document.getElementById("boton-respuesta");
const parrafoVerdadRespuesta = document.getElementById("parrafo-verdad-respuesta");
const botonResetear = document.getElementById("boton-resetear");
const listaDatos = document.getElementById("datos-lenguaje");


// Introducir el simbolo aleatorio en el elemento html
let codigoUnicode = unicodeAleatorio();
simboloClase.innerText = String.fromCodePoint(codigoUnicode);



// Eventos
// Agregar evento de click al boton
inputBotonRespuesta.addEventListener('click', function () {

    const textoIngresado = inputRespuesta.value;

    if (textoIngresado.toLowerCase() == caracteresMetodos.codigoCaracter(SCRIPTS, codigoUnicode).name.toLowerCase()) {
        parrafoVerdadRespuesta.innerText = "Verdadero";
        caracteresMetodos.mostrarDatosLenguaje(codigoUnicode, listaDatos);

    } else {
        parrafoVerdadRespuesta.innerText = "Falso";
    };

    inputRespuesta.value = "";
});

// Agregar evento al presionar enter en el input de respuesta
inputRespuesta.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        const textoIngresado = inputRespuesta.value;
        if (textoIngresado.toLowerCase() == caracteresMetodos.codigoCaracter(SCRIPTS, codigoUnicode).name.toLowerCase()) {
            parrafoVerdadRespuesta.innerText = "Verdadero";
            caracteresMetodos.mostrarDatosLenguaje(codigoUnicode, listaDatos);
            
        } else {
            parrafoVerdadRespuesta.innerText = "Falso";
        };

        inputRespuesta.value = "";
    }
});


// Resetear simbolo y respuesta
botonResetear.addEventListener('click', function () {
    codigoUnicode = unicodeAleatorio();
    simboloClase.innerText = String.fromCodePoint(codigoUnicode);
    inputRespuesta.value = "";
    parrafoVerdadRespuesta.innerText = "";

});


// Mostrar los datos del lenguaje actual




