// saber los angulos de un triangulo sabiendo los 3 lados 

// teorema del coseno


function teoremaSenoA(a, b, c) {

    anguloA = Math.acos(((Math.pow(a, 2)) - (Math.pow(b, 2)) - (Math.pow(c, 2))) / (-2 * b * c))

    return anguloA
}

function teoremaSenoB(a, b, c) {

    anguloB = Math.acos(((Math.pow(b, 2)) - (Math.pow(a, 2)) - (Math.pow(c, 2))) / (-2 * a * c))

    return anguloB
}

function teoremaSenoC(a, b, c) {

    anguloC = Math.acos(((Math.pow(c, 2)) - (Math.pow(b, 2)) - (Math.pow(a, 2))) / (-2 * b * a))

    return anguloC
}

// pasar a radianes
function radianesGrados(rad) {
    grados = rad * (180 / Math.PI);
    return grados;
};

a = Number(prompt("Ingresar medida de lado a de un triángulo:"));
b = Number(prompt("Ingresar medida de lado b de un triángulo:"));
c = Number(prompt("Ingresar medida de lado c de un triángulo:"));



anguloA = radianesGrados(teoremaSenoA(a, b, c));
anguloB = radianesGrados(teoremaSenoB(a, b, c));
anguloC = radianesGrados(teoremaSenoC(a, b, c));


console.log("En un triangulo de lado a = ", a, ", lado b = ", b, ", lado c = ", c, ".", "\n Angulo A = ", anguloA, "º", "\n Angulo b = ", anguloB, "º", "\n Angulo c = ", anguloC, "º")