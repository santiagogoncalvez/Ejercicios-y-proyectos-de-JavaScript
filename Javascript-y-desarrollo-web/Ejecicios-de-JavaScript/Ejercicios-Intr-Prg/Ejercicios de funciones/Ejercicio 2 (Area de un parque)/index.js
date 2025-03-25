// Area de un parque

// Area de un hexagono
function areaHexagono(perimetro) {

    medidaLado = perimetro / 6;
    tita = ((360 * Math.PI) / 180) / (2 * 6);
    apotema = medidaLado / (2 * (Math.tan(tita)));

    area = (perimetro * apotema) / 2;
    console.log("hexagono", area)
    return area;

};

// Area de un circulo
function areaCirculo(longitud) {
    
    radio = longitud / (2 * Math.PI);
    
    area = Math.PI * Math.pow(radio, 2);

    console.log("circulo", area)
    return area;
}

// Area de un rectangulo
function areaRectangulo (lado1, lado2) {

    area = lado1 * lado2;
    console.log("rectangulo", area)
    return area;
}


function areaTotalParque(perZ1Hex, perZ2Hex, perZ3Hex, longZ1Circ, longZ2Circ, lado1RectZ1, lado2RectZ1, lado1RectZ2, lado2RectZ2, lado1RectZ3, lado2RectZ3, lado1RectZ4, lado2RectZ4) {

    // Zona hexagonos
    zona1Hex = areaHexagono(perZ1Hex);


    zona2Hex = areaHexagono(perZ2Hex);

    zona3Hex = areaHexagono(perZ3Hex);

    // Zona circulos
    zona1Circ = areaCirculo(longZ1Circ);
    zona2Circ = areaCirculo(longZ2Circ);


    // Zona cuadrados
    zona1Rect = areaRectangulo (lado1RectZ1, lado2RectZ1);
    zona2Rect = areaRectangulo (lado1RectZ2, lado2RectZ2);
    zona3Rect = areaRectangulo (lado1RectZ3, lado2RectZ3);
    zona4Rect = areaRectangulo (lado1RectZ4, lado2RectZ4);


    areaTotal = zona1Hex + zona2Hex + zona3Hex + zona1Circ + zona2Circ + zona1Rect + zona2Rect + zona3Rect + zona4Rect;

    return areaTotal;
}

perZ1Hex = prompt("Ingresar perimetro zona 1 hexagono");
perZ2Hex = prompt("Ingresar perimetro zona 2 hexagono");
perZ3Hex = prompt("Ingresar perimetro zona 3 hexagono");
longZ1Circ = prompt("Ingresar longitud zona 1 circulo");
longZ2Circ = prompt("Ingresar longitud zona 2 circulo");
lado1RectZ1 = prompt("Ingresar medida lado 1 zona 1 rectangulo")
lado2RectZ1 = prompt("Ingresar medida lado 2 zona 1 rectangulo");
lado1RectZ2 = prompt("Ingresar medida lado 1 zona 2 rectangulo")
lado2RectZ2 = prompt("Ingresar medida lado 2 zona 2 rectangulo");
lado1RectZ3 = prompt("Ingresar medida lado 1 zona 3 rectangulo");
lado2RectZ3 = prompt("Ingresar medida lado 2 zona 3 rectangulo");
lado1RectZ4 = prompt("Ingresar medida lado 1 zona 4 rectangulo");
lado2RectZ4 = prompt("Ingresar medida lado 2 zona 4 rectangulo");

console.log("El area total de todo el parque es de: ", areaTotalParque(perZ1Hex, perZ2Hex, perZ3Hex, longZ1Circ, longZ2Circ, lado1RectZ1, lado2RectZ1, lado1RectZ2, lado2RectZ2, lado1RectZ3, lado2RectZ3, lado1RectZ4, lado2RectZ4))



