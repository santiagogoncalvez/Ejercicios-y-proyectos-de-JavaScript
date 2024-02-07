// Ejercicio Modulos de caminos, capitulo 10
// Modulo GrafoCaminos


// Dependencia de este modulo
let buildGraph = require(/*dependencia "grafo" (exporta funcion para construir el grafo)*/)

const roads = [
    "Casa de Alicia-Casa de Bob", "Casa de Alicia-Cabaña",
    "Casa de Alicia-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Mercado-Granja",
    "Mercado-Oficina de Correos", "Mercado-Tienda",
    "Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];

exports.roadGraph = buildGraph;