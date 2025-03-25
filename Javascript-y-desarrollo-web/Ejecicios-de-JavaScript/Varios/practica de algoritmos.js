var nota1 = 5;
var nota2 = 10;
var nota3 = 9;
var nota4 = 3;
var imp1 = 0.15;
var imp2 = 0.15;
var imp3 = 0.30;
var imp4 = 0.40;

function promedioPonderado() {
  let definitiva = (nota1*imp1 + nota2*imp2 + nota3*imp3 + nota4*imp4)/(imp1 + imp2 + imp3 + imp4);
  return definitiva;
}

console.log(promedioPonderado())
 
function promedio() {
let definitiva = (nota1 + nota2 + nota3 + nota4)/4;
return definitiva;
}

console.log(promedio())

var lado = 6
function areaTotal(){Math.pow(lado,2)*6;
return Math.pow(lado,2)*6}
console.log(areaTotal())

const grados = 2709
var radianes = grados * (Math.PI/180);
console.log(radianes);

var ir = 9%2
console.log(ir)
