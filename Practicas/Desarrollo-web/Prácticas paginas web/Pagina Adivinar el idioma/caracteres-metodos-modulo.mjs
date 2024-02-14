export const caracteresMetodos = {
  // La siguiente funcion sirve para verificar si un numero pertenece a algun codigo de lenguaje
  verificarCaracter: function (rangos, codigo_caracter) {
    if (
      rangos.some(([desde, hasta]) => {
        return codigo_caracter >= desde && codigo_caracter < hasta;
      })
    ) {
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
      }
    }

    // Genera un número aleatorio dentro del rango seleccionado

    // No todos los rangos tienen la misma longitud y algunos tienen mas elementos que otros!!
    let numeroDentroDelRango;
    let rangoElegido;

    rangoElegido =
      rangoSeleccionado[Math.floor(Math.random() * rangoSeleccionado.length)];
    numeroDentroDelRango = Math.floor(
      Math.random() * (rangoElegido[1] - rangoElegido[0]) + rangoElegido[0]
    );


    return numeroDentroDelRango;
  },

  codigoCaracter: function (SCRIPTS, codigo_caracter) {
    for (let codigo of SCRIPTS) {
      if (
        codigo.ranges.some(([desde, hasta]) => {
          return codigo_caracter >= desde && codigo_caracter < hasta;
        })
      ) {
        return codigo;
      }
    }

    return null;
  },

  nombreSimbolo: function (SCRIPTS, simbolo) {
    return SCRIPTS.reduce((actual, element) =>
      element.name == this.codigoCaracter(simbolo.codePoinAt(0))
        ? element
        : actual
    ).name;
  },

  comprobarCaracterInexistente: function (codigo_caracter) {
    let caracterInexistente = "ꤿ";
    let simboloCaracter = String.fromCodePoint(codigo_caracter);
    if (simboloCaracter === caracterInexistente) {
      return false;
    } else {
      return true;
    }
  },

  mostrarDatosLenguaje: function (codigo, listaDatos) {
    let propiedades = Object.keys(codigo);

    for (let i = 0; i < propiedades.length; i++) {
      // Crea un elemento <li>
      const elementoLi = document.createElement("li");

      // Asigna el texto correspondiente al elemento <li>
      elementoLi.textContent =
        String(propiedades[i]) + `: ${codigo[`${propiedades[i]}`]}`;
      // Agrega el elemento <li> a la lista (<ul>)
      listaDatos.appendChild(elementoLi);
    }
  },
};
