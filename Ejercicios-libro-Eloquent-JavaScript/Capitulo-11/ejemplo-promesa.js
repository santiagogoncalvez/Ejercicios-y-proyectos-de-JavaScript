const data = [
  {
    title: "Apreniendo JavaScript",
    year: 2024,
    isbn: "979-8700179263",
    author: "Santiago",
  },
  {
    title: "Apreniendo React.js",
    year: 2024,
    isbn: "979-8700179263",
    author: "Santiago",
  },
];

// Esto va a mostrar los datos
function getDataOriginal() {
  return data;
}

console.log(getDataOriginal());

// Pero esto no va a mostrar los datos ya que se introduce un retardo con setTimeout() y no hay ningun retorno explicito de getData():
function getData() {
  setTimeout(() => {
    return data;
  }, 3000);
}

/*
Funcion parecida pero con promesas (Objeto promise):

-Buena practica: clausula de cierre, intentar escribir los peores casos al inicio de las funciones para devolver el error o salir de la funcion.

Resolve es una funcion para informar el caso de resolucion de la promesa.
Reject es una funcion para informar el caso de rechazo de la promesa.
*/

function getDataWhithPromises() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("Data is empty"));
    }

    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

/*  
    - 'then': es un metodo de promesa que adjunta una devolucion de llamada que se ejecuta cuando se resuelve la promesa.

    - 'catch': es es un metodo de promesa que adjunta una devolucion de llamada que se ejecuta cuando se rechace promesa.
*/

getDataWhithPromises()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });

