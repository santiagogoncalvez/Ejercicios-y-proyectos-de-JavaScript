// Buscar cache de alimento del Gran Roble:
const { bigOak, defineRequestType } = require("./crow-tech");

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});

console.log("<--------->");


// Metodo enviar (nombre del nido, tipo de solicitud, contenido, fucion a llamar cuando llega una respuesta).
// No se puede enviar este mensaje porque no esta definito el tipo de nota:
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("Note delivered.")
);

console.log("<--------->");

// Definir solicitud "nota" en todos los nidos:
defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});


// Ahora si se puede enviar este tipo de nota:
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("Note delivered.")
);



function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result))
  })
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));




//Funcion que envia un mensaje, estructurado con promesas;

// Definir error específico
class Timeout extends Error { }

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}



function requestType(name, handler) {
  defineRequestType(name, (nest, content, source,
    callback) => {
    try {
      Promise.resolve(handler(nest, content, source))
        .then(response => callback(null, response),
          failure => callback(failure));
    } catch (exception) {
      callback(exception);
    }
  });
}

