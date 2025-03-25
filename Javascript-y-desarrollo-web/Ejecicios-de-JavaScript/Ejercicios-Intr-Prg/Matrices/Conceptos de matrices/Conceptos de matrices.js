// Dimensionar un vector
arreglo = Array(2)
console.log("La dimension del vector arreglo es: " + arreglo.length)

var nuevoArray = Array(10);
// Bucle para meter en cada posición otro array de 3
for ( var i = 0; i < 3; i ++ ) {
    nuevoArray[i] = Array(3);
}

// Arreglos matriciales o multidimensionales
// escrito en forma matriz
nuevoArray = [
  [1, 2 ,3],
  [4, 5, 6],
  [7, 8, 9],
];

// escrito visualmente en forma de vector
// nuevoArray = [ [1, 2 ,3] , [4, 5, 6] , [7, 8, 9] ];



console.log(nuevoArray[1][2])

for (f = 0; f < 3; f++){

  for (c = 0; c < 3; c++) {

    console.log(nuevoArray[f][c]);
  }
}
