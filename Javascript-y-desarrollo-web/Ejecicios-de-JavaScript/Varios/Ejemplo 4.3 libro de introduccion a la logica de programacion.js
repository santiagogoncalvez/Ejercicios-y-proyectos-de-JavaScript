var numero = 4510;

    
// Analiza si el numro es positivo o negativo
if (numero > 0) {
  // Acumuladores que se van a utilizar para marcar el inicio y finalizacion del bucle
  var copiaNumero = numero
  var contadorCifras = 0
  var sumatoriaCifras = 0
  
  // Bucle que va a contar y sumar las cifras del numero dado
  while (copiaNumero > 0){
    cifra = copiaNumero % 10
    copiaNumero = Math.trunc(copiaNumero / 10)
    contadorCifras = contadorCifras + 1
    sumatoriaCifras = sumatoriaCifras + cifra
  }
  // Imprime la cantidad de cifras de un numero y la suma de cada una de ellas
  console.log("El numero " + numero + " tiene " + contadorCifras + " cifras, y la suma de cada una de sus cifras es igual a " + sumatoriaCifras)
} else {
  console.log("No es un numero positivo")
}