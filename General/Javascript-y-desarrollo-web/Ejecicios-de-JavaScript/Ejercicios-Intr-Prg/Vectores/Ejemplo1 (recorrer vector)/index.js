var numero = []
var i;

// pedir numero y guardarlos en un vector

for (i = 0; i < 6; i++) {
    valor = Number(prompt("Ingresar numero a guardar en un vector"))
    numero[i] = valor;
}

console.log( numero );