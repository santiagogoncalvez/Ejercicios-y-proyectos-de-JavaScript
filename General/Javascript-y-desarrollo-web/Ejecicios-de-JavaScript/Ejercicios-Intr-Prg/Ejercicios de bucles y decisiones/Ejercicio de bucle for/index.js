// Algorimo funcionX

// Declaración de variables
var valorX, x, funcion;

// Dato a ingresar
valorxx = prompt("Ingrese el máximo de valor para x:");
valorX = parseInt(valorxx)
// console.log(valorX + valorX)

// Validación de datos
if (valorX > 0) {

    // Calculo de la funcion
    for (let x = 0; x <= valorX; x= x+2) {
        funcion = Math.pow(x,3) + Math.pow(x,2) - 5;
        console.log("Para x = " + valorX + ", f(x) = " + funcion)
    }
console.log("Fin del bucle")
} else {
    
console.log("No se puede ingresar 0")
}


