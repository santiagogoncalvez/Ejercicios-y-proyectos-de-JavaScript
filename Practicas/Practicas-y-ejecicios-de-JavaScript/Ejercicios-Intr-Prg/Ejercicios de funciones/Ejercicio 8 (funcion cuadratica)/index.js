function cuadratica(a, b, c) {
  discriminante = Math.pow(b, 2) - 4 * a * c;
  if (discriminante >= 0 && a < 0) {
    x1 = (-(b) + Math.sqrt( Math.pow(b, 2) - 4 * a * c )) / (2 * a);
    x2 = (-(b) - Math.sqrt( Math.pow(b, 2) - 4 * a * c )) / (2 * a);

    return [x1, x2];
  } else {
    return "La ecuacion no tiene solucion";
  }
}

a = Number(prompt("Ingresar valor a de la funcion cuadratica:"));
b = Number(prompt("Ingresar valor b de la funcion cuadratica:"));
c = Number(prompt("Ingresar valor c de la funcion cuadratica:"));

resultado = cuadratica(a, b, c);
if (typeof resultado != 'string') {
console.log("El resultado es: \nx1 = ", resultado[0], "\nx2 = ", resultado[1]);
} else {
  console.log(resultado);
}