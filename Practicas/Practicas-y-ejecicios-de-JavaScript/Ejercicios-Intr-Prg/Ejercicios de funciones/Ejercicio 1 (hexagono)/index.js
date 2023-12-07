// Calcular area de un hexagono

// function areaHexagono(medidaLado) {

//     perimetro = medidaLado * 6;
//     tita = ((360 * Math.PI) / 180) / (2 * 6);
//     apotema = medidaLado / (2 * (Math.tan(tita)));

//     area = (perimetro * apotema ) / 2;

//     return area;
// };

// medidaLado = prompt("Ingresar medida de lado de un hexagono para calcular su area:");


// console.log("El area de un hexagono de lado ", medidaLado, " es: " , areaHexagono(medidaLado));



// Generalizacion para cualquier poligono

function areaHexagono(medidaLado,) {

    perimetro = medidaLado * cantLados;
    tita = ((360 * Math.PI) / 180) / (2 * cantLados);
    apotema = medidaLado / (2 * (Math.tan(tita)));

    area = (perimetro * apotema ) / 2;

    return area;
};

// Validacion lados > 2
do {cantLados = Number(prompt("Ingrese cantidad de lados de un poligono regular"))
} while(cantLados <= 3 || Number.isInteger(cantLados) == false)

medidaLado = Number(prompt("Ingresar medida de lado de un poligono regular"))


console.log("El area de un poligono de", cantLados, "lados cuyo lado mide ", medidaLado, " es: " , areaHexagono(medidaLado));