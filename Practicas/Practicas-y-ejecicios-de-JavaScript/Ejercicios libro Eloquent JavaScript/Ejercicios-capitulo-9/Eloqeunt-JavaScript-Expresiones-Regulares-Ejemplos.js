// Expresiones regulares, capitulo 9.

let text = "Eiusmod magna aliquip est et ullamco. Enim ipsum sint officia qui mollit anim laborum reprehenderit. Veniam elit enim reprehenderit irure Lorem officia ad ut sint sunt dolore. Amet dolor quis et laborum aliqua anim minim aliqua. Non mollit cupidatat deserunt nostrud est occaecat. Deserunt esse fugiat labore laborum voluptate anim in magna irure tempor.";

let expReg = new RegExp("officia");
let expReg2 = /anim/;       //Forma mas utilizada por los desarrolladores;

console.log(expReg.test(text));
console.log(expReg.test(text));
console.log(expReg.exec(text));




// Si se quiere espresar un caracter especial en si mismo en una expresion regular debe ir precedido por una barra invertida:
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus.test("eighteen+"));




// Poner una expresión regular entre corchetes hace que esa parte de la expresion coincida con cualquiera de los caracteres entre los corchetes, es decir, cuando se compara se evalua si en la cadena dada aparece algunos de los caracteres que estan entre los corchetes.
console.log(/[123456789]/.test("en 1989"));
console.log(/[0-9]/.test("en 1989"));

// El guion puede ser utilizado para indicar un rango de caracteres




// Coincidir un formato de fecha y hora como 30-01-2003 15:20 :
let dateAndTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateAndTime.test("30-01-2003 15:20"));
console.log(dateAndTime.test("30-jan-2003 15:20"));




// Para invertir un conjunto de caracteres, es decir, expresar que se desea coincidir con cualquier caracter excepto con los que estan en el conjunto  se puede escribir un caracter de intercalacion despues del corchete de apertura:
let nonBinary = /[^01]/;
console.log(nonBinary.test("01101001101"));
console.log(nonBinary.test("01100200100"));         //Aparece un 2




// Para hacer coincidir un numero completo se puede poner un '+' despues de algo en una expresion regular e indica que el elemento puede repetirse mas de una vez:
console.log(/123+/.test("342123345"));
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));

// El asterisco (*) permite que el patron coincida 0 veces, o mas:
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));        //0 veces de coincidencia




// Un signo de interrrogacion hace que laparte de la izquierda de un patron sea opcional, es decir, el elemento a la izquierda del signo de interrogacion pued aparecer "cero o una vez":
let neighBour = /neighbou?r/;
console.log(neighBour.test("neighbour"));
console.log(neighBour.test("neighbor"));




// Para indicar que un patron deberia ocurrir un numero especifico de veces consecutivas se usan las llaves despues del patron, {4} el caracter se debe repetir 4 veces consecutivas exactas exactas:
console.log(/\d{4}/.test("111"));
console.log(/\d{4}/.test("1111"));

// Tambien es posible especificar un rango de la forma {minimo,maximo},{2,4}, se puede repetir minimo 2 veces y maximo 4:
let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("01-1-2003 8:45"));




// Para usar * o + en mas de un elemento a la vez hay que usar parentesis, una expresion que se encierra entre parentesis cuenta como elemento unico:
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoo"));

// la i es un caracter especial que indica que la expresion es insensible a mayusculas y minusculas, no distingue entre mayusculas y minusculas




// Las expresiones regulares tienen un metodo exec ("ejecutar") que returna null si no se encontro una coincidencia y retorna un objeto con informacion de la coincidencia de lo contrario:
let match = /\d+/.exec("uno dos 100");
console.log(match);
console.log(match.index);

// La propiedad index indica el indice de en donde se encontro la primera coincidencia

// El metodo exec devuelve un array con las propiedades 0, index, groups, input, que proporcionan mas informacion.




// Los valores de tipo string tienen un metodo match que se comporta de manera similar a exec:
console.log("uno dos 100".match(/\d+/));




// La expresion regular captura la coincidencia completa como primer elemento en el array resultante, y los subgrupos (los que estan entre parentesis) capturan las coincidencias especificas dentro de la expresion regular:
let regex = /(\w+)-(\d{2,4})/.exec("ejemplo-123");
console.log(regex[0]);
console.log(regex[1]);
console.log(regex[2]);



/* Cuando un grupo no termina siendo emparejado en absoluto (por ejemplo, cuando es seguido de un signo de interrogación), su posición en el array de salida sera undefined. Del mismo modo, cuando un grupo coincida multiples veces, solo la ultima coincidencia termina en el array. */
console.log(/mal(isimo)?/.exec("mal"));
console.log(/(\d)+/.exec("123"));

// Los grupos pueden ser útiles para extraer partes de un string. Por ejempl si queremos verifica y extraer una fecha de un texto se podrdía hacer de la siguiente manera:
let expReg3 = /(\d{1,2})-(\d{1,2})-(\d{4})/;
console.log(expReg3.exec("On 10-02-2023 dawned whith a clear sky"));




// JavaScript tiene una clase estandar para representar fechas, puntos en el tiempo, llamada date. Se utiliza creando un objeto fecha usando new, y se obtiene la fecha y la hora actual:
console.log(new Date());

// Tambien se puede crear un objeto para un tiempo especifico:
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));


// ❗Importante: JavaScript usa una convencion en donde los numeros de los meses comienzan en 0 (por lo que diciembre es 11), y los numeros de los días comienzan en 1.




// Las marcas de tiempo se almacenan como la cantidad de milisegundos desde inicios de 1970. Usar el objeto get.Time en un objeto retorna este número:
console.log(new Date(2013, 11, 19).getTime());

// Si se le da al constructor Date un unico argumento este sera tratado como un conteo de milisegundos:
console.log(new Date(1387422000000));


// Metodos de Date:

let date = new Date(1990, 11, 9, 12, 20, 30);

// getFullYear:
console.log(date.getFullYear());

// getMonth:
console.log(date.getMonth());

// getDate:
console.log(date.getDate());

// getHours:
console.log(date.getHours());

// getMinutes:
console.log(date.getMinutes());

// getSeconds:
console.log(date.getSeconds());

// getYear, devuelve un valor de año de 2 dígitos:
console.log(date.getYear());




// Al poner paréntesis alrededor de las partes de una expresión en la que se esta interesado se puede crear un objeto de fecha a partir de un string:
function getDate(string) {
    let [_, date, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    console.log(date, month, year)

    return new Date(year, month-1, date);
};

console.log(getDate("30-01-2003"));

// La vinculación _ (guion bajo) es ingonarda y solo se usa para omitir el elemento de coincidencia completa en el array retornado por exec.




// Si se quiere hacer que la coincidencia abarque el string completamente se pueden agregar los marcadores ^ (inicio del string) y $ (final del string):
console.log(/\d+/.exec("10a"));         //No abarca todo el string
console.log(/^\d+$/.exec("10a"));           //Abarca todo el string

console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec("100-1-30000"));
console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec("10-1-3000"));




// El signo de intercalacion (^) indica con que elemento debe comenzar un string:
console.log(/^!/.test("hello"));
console.log(/^!/.test("!hello"));

// El signo $ indica con que elemento debe terminar un string:
console.log(/!$/.test("hello"));
console.log(/!$/.test("hello!"));




// Si se quiere hacer que una fecha o una palabra comience y termine en un limite de palabras, se puede utilizar el marcador /b. 
// \b — Marca la posición de una palabra limitada por espacios en blanco, puntuación o el inicio/final de una cadena.
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));




// El caracter de tubería (|) denota una elección entre el patrón de su izquierda y el patrón de su derecha:
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test("15 pig"));
console.log(animalCount.test("15 horses"));




// Los valores de strings tienen un metodo replace ("reemplazar") que se puede usar para reemplazar parte del string con otro string:
console.log("papa".replace("p", "m"));


// El primer argumento tambien puede ser una expresion regular y en este caso la primera coincidencia de la expresión regular es reemplazada:

// Reemplazar la primera coincidencia que encuentre:
console.log("Borobudur".replace(/[ou]/, "a"));

// Reemplazar todas las coincidencias que encuentre:
console.log("Borobudur".replace(/[ou]/g, "a"));




// En el metodo replace se puede referir a grupos coincidentes en la string de reemplazo.

// Ejemplo: "tenemos una gran string que contenga los nombres de personas, un nombre por línea, en el formato  Apellido, Nombre. Si deseamos intercambiar estos nombres y eliminar la coma para obtener un formato Nombre Apellido, podemos usar el siguiente código" :

let names = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
console.log(names.replace(/(\w+), (\w+)/g, "$2 $1"));

// Explicación: Cuando encuentra la coincidencia reemplaza la coincidencia por un string que contiene en al principio el segundo grupo y al final el primer grupo.


/* Los $1 y $2 en el string de reemplazo se refieren a los grupos entre paréntesis del patrón. $1 se reemplaza por el texto que coincide con el primer grupo, $2 por el segundo, y así sucesivamente, hasta $9. Puedes hacer referencia a la coincidencia completa con $&. */




// Es posible pasar una funcion como segundo argumento al metodo replace, en vez de un string.
// Para cada reemplazo la funcion será llamada con los grupos coincidentes como argumentos y su valor de retorno se insertará en el nuevo string:

let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));


let stock = "1 lemon, 2 cabbage, and 101 eggs";

//  Cualquier funcion se llama con la coincidencia completa y con los grupos coincidentes
function minusOne (match, amount, unit) {
    amount = Number(amount) - 1;

    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    };

    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
