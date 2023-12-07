// Imortar json que contiene todos los lenguajes
import codigos from './Archivos-JSON/Codigos-de-escritura.json' assert { type: 'json' };
import probabilidadesCodigos from './Archivos-JSON/Probabilidades-codigos-escritura.json' assert {type: 'json'};

// Informacion
{
    // Primer caracter UNICODE utilizado por los lenguajes: 65
    // Ultimo caracter UNICODE utilizado por los lenguajes: 195101
    // Cantidad de lenguajes: 139
    // Ponderacion : 1 / 139 == 0,007
}

// Funciones

let caracteresMetodos = {
    // La siguiente funcion sirve para verificar si un numero pertenece a algun codigo de lenguaje
    verificarCaracter: function (rangos, codigo_caracter) {

        if (rangos.some(([desde, hasta]) => { return codigo_caracter >= desde && codigo_caracter < hasta })) {
            return true;
        }

        return false;
    },

    simboloAleatorioLeng: function (probabilidades) {
        // Este bucle devuelve un numero aleatorio que se encuentre dentro de algun rango de los codigos de algun lenguaje
        let numeroAleatorio = Math.random();
        // Encuentra el rango en función de las probabilidades
        let rangoSeleccionado;
        let probabilidadAcumulada = 0;

        for (const rango of probabilidades) {
            probabilidadAcumulada += rango.probabilidad;

            if (numeroAleatorio <= probabilidadAcumulada) {
                rangoSeleccionado = rango.rango;
                break;
            };
        };

        // Genera un número aleatorio dentro del rango seleccionado

        // No todos los rangos tienen la misma longitud y algunos tienen mas elementos que otros!!
        let numeroDentroDelRango;
        let codigoCaracter;
        let caracterInexistente = '஌';
        let rangoElegido;

        while (true) {

            rangoElegido = rangoSeleccionado[Math.floor(Math.random() * rangoSeleccionado.length)];
            numeroDentroDelRango = Math.floor(
                Math.random() * (rangoElegido[1] - rangoElegido[0]) + rangoElegido[0]
            );

            codigoCaracter = String.fromCodePoint(numeroDentroDelRango)
            if (this.verificarCaracter(rangoSeleccionado, numeroDentroDelRango) && this.comprobarCaracterInexistente(numeroDentroDelRango) && codigoCaracter != caracterInexistente) {
                break;
            };
        };

        return numeroDentroDelRango;
    },


    codigoCaracter: function (SCRIPTS, codigo_caracter) {
        for (let codigo of SCRIPTS) {
            if (codigo.ranges.some(([desde, hasta]) => { return codigo_caracter >= desde && codigo_caracter < hasta })) {
                return codigo;
            }
        }

        return null;
    },


    nombreSimbolo: function (SCRIPTS, simbolo) {
        return SCRIPTS.reduce((actual, element) => element.name == this.codigoCaracter(simbolo.codePoinAt(0)) ? element : actual).name;
    },


    comprobarCaracterInexistente: function (codigo_caracter) {
        let caracterInexistente = "ꤿ";
        let simboloCaracter = String.fromCodePoint(codigo_caracter);
        if (simboloCaracter === caracterInexistente) {
            return false;
        } else {
            return true
        };
    },

    mostrarDatosLenguaje: function (codigo, listaDatos) {
        let propiedades = Object.keys(codigo);

        for (let i = 0; i < propiedades.length; i++) {
            // Crea un elemento <li>
            const elementoLi = document.createElement("li");
          
            // Asigna el texto correspondiente al elemento <li>
            elementoLi.textContent = String(propiedades[i]) + `: ${codigo[`${propiedades[i]}`]}`;
            // Agrega el elemento <li> a la lista (<ul>)
            listaDatos.appendChild(elementoLi);
          };


    }
};




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
    simbolo.innerText = String.fromCodePoint(caracteresMetodos.simboloAleatorioLeng(rangosProbabilidades));
    inputRespuesta.value = "";
    parrafoVerdadRespuesta.innerText = "";
    console.log(caracteresMetodos.codigoCaracter(SCRIPTS, simboloAleatorio).name);

});


// Mostrar los datos del lenguaje actual





