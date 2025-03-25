// Procedimiento con base 3
valor1 = Number(prompt("Ingresar valor"));

function secuencia(valor1, base) {
    contador = 1;
    do {
        resultado = base * contador;
        console.log(resultado);
        contador = contador + 1;
    } while (contador <= valor1);
}

secuencia(valor1, 3);


// Procedimiento con base 5
valor2 = Number(prompt("Ingresar valor"));

function secuencia2(valor2, base) {
    contador = 1;
    do {
        resultado = base * contador;
        console.log(resultado);
        contador = contador + 1;
    } while (contador <= valor2);
}

secuencia2(valor2, 5);



// generalizado
base = Number(prompt("Ingresar base"));
valor1 = Number(prompt("Ingresar valor"));

function secuencia(valor1, base) {
    contador = 1;
    do {
        resultado = base * contador;
        console.log(resultado);
        contador = contador + 1;
    } while (contador <= valor1);
}