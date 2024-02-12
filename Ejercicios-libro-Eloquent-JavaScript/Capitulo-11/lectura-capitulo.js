// Buscar cache de alimento del Gran Roble:
const { bigOak, defineRequestType, everywhere } = require("./crow-tech");
const http = require('http');


bigOak.readStorage("food caches", (caches) => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, (info) => {
        console.log(info);
    });
});



// Metodo enviar (nombre del nido, tipo de solicitud, contenido, fucion a llamar cuando llega una respuesta).
// No se puede enviar este mensaje porque no esta definito el tipo de nota:
console.log("<--------->");
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

function storage(nest, name) {
    return new Promise((resolve) => {
        nest.readStorage(name, (result) => resolve(result));
    });
}

storage(bigOak, "enemies").then((value) => console.log("Got", value));



console.log("<--------->");
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
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source)).then(
                (response) => callback(null, response),
                (failure) => callback(failure)
            );
        } catch (exception) {
            callback(exception);
        }
    });
}


console.log("<--------->");
// Esta funcion verifica los nidos accesibles desde un cierto nido:
requestType("ping", () => "pong");

function availableNeighbors(nest) {
    let requests = nest.neighbors.map((neighbor) => {
        return request(nest, neighbor, "ping").then(
            () => true,
            () => false
        );
    });

    return Promise.all(requests).then((result) => {
        return nest.neighbors.filter((_, i) => result[i]);
    });
}


console.log("<--------->");
// Funcion que ejecuta codigo en cada nido:
everywhere(nest => {
    nest.state.gossip = [];
});

// Funcion que transmite un mensaje a toda la red:
function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest, neighbor, "gossip", message);
    }
}

requestType("gossip", (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${message}' from ${source}`);
    sendGossip(nest, message, source);
});

// Enviar mensaje a todos los nidos:
bigOak.send("Cow Pasture", "gossip", "There are wolves nearby", () => { });
console.log()



console.log("<--------->");
// Definir tipo de mensaje "concections" para evaluar los nidos existentes y alcance de cada uno.
requestType("connections", (nest, { name, neighbors },
    source) => {
    let connections = nest.state.connections;
    if (JSON.stringify(connections.get(name)) ==
        JSON.stringify(neighbors)) return;
    connections.set(name, neighbors);
    broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest, neighbor, "connections", {
            name,
            neighbors: nest.state.connections.get(name)
        });
    }
}

everywhere(nest => {
    nest.state.connections = new Map();
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name);
});

everywhere(nest => console.log(nest.state.connections));





// La funcion findRoute() busca la forma de llegar a un determinado nodo de la red:

function findRoute(from, to, connections) {
    let work = [{ at: from, via: null }];

    for (let i = 0; i < work.length; i++) {
        let { at, via } = work[i];
        for (let next of connections.get(at) || []) {
            if (next == to) return via;
            if (!work.some(w => w.at == next)) {
                work.push({at: next, via: via || next})
            }
        }
    }

    return null;
}



