// Expresiones regulares, capitulo 9.

let text ="Eiusmod magna aliquip est et ullamco. Enim ipsum sint officia qui mollit anim laborum reprehenderit. Veniam elit enim reprehenderit irure Lorem officia ad ut sint sunt dolore. Amet dolor quis et laborum aliqua anim minim aliqua. Non mollit cupidatat deserunt nostrud est occaecat. Deserunt esse fugiat labore laborum voluptate anim in magna irure tempor.";

let expReg = new RegExp("officia");
let expReg2 = /anim/;       //Forma mas utilizada por los desarrolladores;

console.log(expReg.test(text));
console.log(expReg.test(text));
console.log(expReg.exec(text));

// Si se quiere espresar un caracter especial en si mismo en una expresion regular debe ir precedido por una barra invertida:
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus.test("eighteen+"));


// Poner una expresión regular entre corchetes hace que