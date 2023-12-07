var abecedario = "zyxwvutsrqponmlkjihgfedcba"
var recorte = 0;

for( contador = 0; contador < 26; contador++) {
    var abecedarioModificado = abecedario.slice(recorte);
    console.log(abecedarioModificado);
    recorte = recorte + 1;
}