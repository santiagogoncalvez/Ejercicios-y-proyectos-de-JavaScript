// Algoritmo: numeros primos de 1 a 100

numero = 100;
for(i = numero; i > 1 ; i--) {
  let primo = true;
  
  for ( divisor = i; divisor > 1; divisor--) {
    
    if (divisor != 1 && divisor != i){
      if (i % divisor== 0) {
      primo = false;
      }
    }
    }
  if (primo == true) {
    console.log(i)
  }
}


