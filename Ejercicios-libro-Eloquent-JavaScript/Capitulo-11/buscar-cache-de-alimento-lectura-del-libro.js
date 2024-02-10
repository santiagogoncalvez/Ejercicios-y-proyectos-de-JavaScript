// Buscar cache de alimento del Gran Roble:
const { bigOak, defineRequestType } = require("./crow-tech");

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});

// Metodo enviar (nombre del nido, tipo de solicitud, contenido, fucion a llamar cuando llega una respuesta).
// No se puede enviar este mensaje porque no esta definito el tipo de nota:
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("Note delivered.")
);


// Definir solicitud "nota" en todos los nidos:
defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});


// Ahora si se puede enviar este tipo de nota:
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("Note delivered.")
);
