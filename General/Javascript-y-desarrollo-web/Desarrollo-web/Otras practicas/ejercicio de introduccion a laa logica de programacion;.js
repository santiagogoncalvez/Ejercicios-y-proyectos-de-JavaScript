var radio = 3;
const pi = 3.1426;

// área de un circulo
function area() {
    areaCirc = Math.pow(radio, 2)*pi;
    return areaCirc;
}

// perímetro de un circulo
function perimetroo() {
perim = 2 * radio * pi;
return perim;
}

var areaCirculo = area();
var perimetro = perimetroo();
console.log("Un circulo de radio " + radio + " Tiene un Área de " + areaCirculo + " y un perimetro de " + perimetro + ".")

console.log(areaCirculo)