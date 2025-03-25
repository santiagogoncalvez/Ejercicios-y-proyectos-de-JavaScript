// Funcion distancia entre 2 puntos

var x1 = prompt("Ingresar x1:");
var y1 = prompt("Ingresar y1:");
var x2 = prompt("Ingresar x2:");
var y2 = prompt("Ingresar y2:");

function distancia (x1, x2, y1, y2) {
 calcular = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  return calcular
}

console.log(distancia(x1,x2,y1,y2));