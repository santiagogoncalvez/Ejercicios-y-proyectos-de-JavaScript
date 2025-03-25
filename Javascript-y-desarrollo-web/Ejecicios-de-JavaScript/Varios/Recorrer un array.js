// Funcion recorrer un array

function numeros() {
    console.log("El numero de argumentos es: ", arguments.length);
  
    for (i = 0; i < arguments.length; i++) {
     console.log("Argumento ", i, " es ", arguments[i])  
    }
    
  }
  
  numeros(2, 5, 6 ,8 , 3)
  