// Codigos unicode que acepta la fuente arial
const arial = `Bit	Rango Unicode	Rango de bloques	Notas
0	Latín básico	0000-007F	
1	Suplemento Latin-1	0080-00FF	
2	Latín Extendido-A	0100-017F	
3	Latín extendido-B	0180-024F	
4	Extensiones IPA	0250-02AF	
Extensiones fonéticas	1D00-1D7F	Añadido en OpenType 1.5 para OS/2 versión 4.
Suplemento de Extensiones Fonéticas	1D80-1DBF	Añadido en OpenType 1.5 para OS/2 versión 4.
5	Letras modificadoras de espaciado	02B0-02FF	
Letras de tono modificador	A700-A71F	Añadido en OpenType 1.5 para OS/2 versión 4.
6	Combinación de signos diacríticos	0300-036F	
Combinación de Suplemento de Signos Diacríticos	1DC0-1DFF	Añadido en OpenType 1.5 para OS/2 versión 4.
7	Griego y copto	0370-03FF	
8	Copto	2C80-2CFF	Añadido en OpenType 1.5 para OS/2 versión 4. Consulte a continuación otras diferencias de versión.
9	Cirílico	0400-04FF	
Suplemento cirílico	0500-052F	Añadido en OpenType 1.4 para OS/2 versión 3.
Cirílico extendido-A	2DE0-2DFF	Añadido en OpenType 1.5 para OS/2 versión 4.
Cirílico extendido-B	A640-A69F	Añadido en OpenType 1.5 para OS/2 versión 4.
10	Armenio	0530-058F	
11	Hebreo	0590-05FF	
12	Vai	A500-A63F	Añadido en OpenType 1.5 para OS/2 versión 4. Consulte a continuación otras diferencias de versión.
13	Árabe	0600-06FF	
Suplemento Árabe	0750-077F	Añadido en OpenType 1.5 para OS/2 versión 4.
14	NKo	07C0-07FF	Añadido en OpenType 1.5 para OS/2 versión 4. Consulte a continuación otras diferencias de versión.
15	Devanagari	0900-097F	
16	Bengalí	0980-09FF	
17	Gurmukhi	0A00-0A7F	
18	Gujarati	0A80-0AFF	
19	Odia	0B00-0B7F	
20	Tamil	0B80-0BFF	
21	Telugu	0C00-0C7F	
22	Kannada	0C80-0CFF	
23	Malayalam	0D00-0D7F	
24	Tailandés	0E00-0E7F	
25	Lao	0E80-0EFF	
26	Georgiano	10A0-10FF	
Suplemento georgiano	2D00-2D2F	Añadido en OpenType 1.5 para OS/2 versión 4.
27	Balinés	1B00-1B7F	Añadido en OpenType 1.5 para OS/2 versión 4. Consulte a continuación otras diferencias de versión.
28	Hangul Jamo	1100-11FF	
29	Latín Extendido Adicional	1E00-1EFF	
Latín extendido-C	2C60-2C7F	Añadido en OpenType 1.5 para OS/2 versión 4.
Latín extendido-D	A720-A7FF	Añadido en OpenType 1.5 para OS/2 versión 4.
30	Griego extendido	1F00-1FFF	
31	Puntuación general	2000-206F	
Puntuación suplementaria	2E00-2E7F	Añadido en OpenType 1.5 para OS/2 versión 4.
32	Superíndices y subíndices	2070-209F	
33	Símbolos de moneda	20A0-20CF	
34	Combinación de signos diacríticos para símbolos	20D0-20FF	
35	Símbolos en forma de letra	2100-214F	
36	Formas numéricas	2150-218F	
37	Flechas	2190-21FF	
Flechas suplementarias-A	27F0-27FF	Añadido en OpenType 1.4 para OS/2 versión 3.
Flechas suplementarias-B	2900-297F	Añadido en OpenType 1.4 para OS/2 versión 3.
Símbolos y flechas misceláneos	2B00-2BFF	Añadido en OpenType 1.5 para OS/2 versión 4.
38	Operadores matemáticos	2200-22FF	
Operadores matemáticos suplementarios	2A00-2AFF	Añadido en OpenType 1.4 para OS/2 versión 3.
Símbolos Matemáticos Misceláneos-A	27C0-27EF	Añadido en OpenType 1.4 para OS/2 versión 3.
Símbolos Matemáticos Misceláneos-B	2980-29 y ss.	Añadido en OpenType 1.4 para OS/2 versión 3.
39	Miscelánea Técnica	2300-23FF	
40	Imágenes de control	2400-243F	
41	Reconocimiento óptico de caracteres	2440-245F	
42	Alfanuméricos adjuntos	2460-24FF	
43	Dibujo de caja	2500-257F	
44	Elementos de bloque	2580-259F	
45	Formas geométricas	25A0-25FF	
46	Símbolos misceláneos	2600-26FF	
47	Dingbats	2700-27BF	
48	Símbolos CJK y puntuación	3000-303F	
49	Hiragana	3040-309F	
50	Katakana	30A0-30FF	
Extensiones fonéticas de Katakana	31F0-31FF	Añadido en OpenType 1.4 para OS/2 versión 3.
51	Bopomofo	3100-312F	
Bopomofo Extendido	31A0-31BF	Añadido en OpenType 1.3, extendiendo la versión 2 de OS/2.
52	Compatibilidad Hangul Jamo	3130-318F	
53	Phags-pa	A840-A87F	Añadido en OpenType 1.5 para OS/2 versión 4. Consulte a continuación otras diferencias de versión.
54	Cartas y meses CJK adjuntos	3200-32FF	
55	Compatibilidad con CJK	3300-33FF	
56	Sílabas hangul	AC00-D7AF	
57	No plano 0	10000-10FFFF	Implica al menos un carácter más allá del plano multilingüe básico. Asignado por primera vez en OpenType 1.3 para OS/2 versión 2.
58	Fenicio	10900-1091F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
59	Ideogramas unificados CJK	4E00-9FFF	
Suplemento de radicales CJK	2E80-2EFF	Añadido en OpenType 1.3 para OS/2 versión 2.
Radicales Kangxi	2F00-2FDF	Añadido en OpenType 1.3 para OS/2 versión 2.
Descripción ideográfica Personajes	2FF0-2FFF	Añadido en OpenType 1.3 para OS/2 versión 2.
Extensión A de ideogramas unificados CJK	3400-4DBF	Añadido en OpenType 1.3 para OS/2 versión 2.
Extensión B de ideogramas unificados CJK	20000-2A6DF	Añadido en OpenType 1.4 para OS/2 versión 3.
Kanbun	3190-319F	Añadido en OpenType 1.4 para OS/2 versión 3.
60	Área de Uso Privado (plano 0)	E000-F8FF	
61	Trazos CJK	31C0-31EF	Rango agregado en OpenType 1.5 para OS/2 versión 4.
Ideogramas de compatibilidad CJK	F900-FAFF	
Complemento de ideogramas de compatibilidad CJK	2F800-2FA1F	Añadido en OpenType 1.4 para OS/2 versión 3.
62	Formularios de presentación alfabéticos	FB00-FB4F	
63	Formularios de Presentación en Árabe-A	FB50-FDFF	
64	Combinación de medias marcas	FE20-FE2F	
65	Formas verticales	FE10-FE1F	Rango agregado en OpenType 1.5 para OS/2 versión 4.
Formularios de compatibilidad CJK	FE30-FE4F	
66	Variantes de forma pequeña	FE50-FE6F	
67	Formularios de Presentación en Árabe-B	FE70-FEFF	
68	Formularios de ancho medio y ancho completo	FF00-FFEF	
69	Especiales	FFF0-FFFF	
70	Tibetano	0F00-0FFF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
71	Siríaco	0700-074F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
72	Thaana	0780-07BF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
73	Cingalés	0D80-0DFF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
74	Myanmar	1000-109F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
75	Etíope	1200-137F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
Suplemento etíope	1380-139F	Añadido en OpenType 1.5 para OS/2 versión 4.
Etíope extendido	2D80-2DDF	Añadido en OpenType 1.5 para OS/2 versión 4.
76	Cheroqui	13A0-13FF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
77	Sílabas unificadas de los aborígenes canadienses	1400-167F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
78	Ogham	1680-169F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
79	Rúnico	16A0-16FF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
80	Jemer	1780-17 y ss.	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
Símbolos jemeres	19E0-19FF	Añadido en OpenType 1.5 para OS/2 versión 4.
81	Mongol	1800-18AF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
82	Patrones Braille	2800-28FF	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
83	Sílabas Yi	A000-A48F	Asignado por primera vez en OpenType 1.3, extendiendo la versión 2 de OS/2.
Radicales Yi	A490-A4CF	Añadido en OpenType 1.3, extendiendo la versión 2 de OS/2.
84	Tagalo	1700-171F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
Hanunoo	1720-173F	Añadido en OpenType 1.4 para OS/2 versión 3.
Buhid	1740-175F	Añadido en OpenType 1.4 para OS/2 versión 3.
Tagbanwa	1760-177F	Añadido en OpenType 1.4 para OS/2 versión 3.
85	Cursiva antigua	10300-1032F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
86	Gótico	10330-1034F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
87	Deseret	10400-1044F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
88	Símbolos musicales bizantinos	1D000-1D0FF	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
Símbolos musicales	1D100-1D1FF	Añadido en OpenType 1.4 para OS/2 versión 3.
Notación musical griega antigua	1D200-1D24F	Añadido en OpenType 1.5 para OS/2 versión 4.
89	Símbolos alfanuméricos matemáticos	1D400-1D7FF	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
90	Uso Privado (avión 15)	F0000-FFFFD	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
Uso Privado (avión 16)	100000-10FFFD	Añadido en OpenType 1.4 para OS/2 versión 3.
91	Selectores de variación	FE00-FE0F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
Suplemento de selectores de variación	E0100-E01EF	Añadido en OpenType 1.4 para OS/2 versión 3.
92	Etiquetas	E0000-E007F	Asignado por primera vez en OpenType 1.4 para OS/2 versión 3.
93	Limbu	1900-194F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
94	Tai Le	1950-197F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
95	Nuevo Tai Lue	1980-19DF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
96	Buginés	1A00-1A1F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
97	Glagolítico	2C00-2C5F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
98	Tifinagh	2D30-2D7F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
99	Símbolos del hexagrama Yijing	4DC0-4DFF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
100	Syloti Nagri	A800-A82F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
101	Silabario Lineal B	10000-1007F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
Ideogramas lineales B	10080-100FF	Añadido en OpenType 1.5 para OS/2 versión 4.
Números del Egeo	10100-1013F	Añadido en OpenType 1.5 para OS/2 versión 4.
102	Números en griego antiguo	10140-1018F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
103	Ugarítico	10380-1039F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
104	Persa antiguo	103A0-103DF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
105	Shavian	10450-1047F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
106	Osmanya	10480-104AF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
107	Sílabario chipriota	10800-1083F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
108	Kharoshthi	10A00-10A5F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
109	Símbolos de Tai Xuan Jing	1D300-1D35F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
110	Cuneiforme	12000-123FF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
Números cuneiformes y puntuación	12400-1247F	Añadido en OpenType 1.5 para OS/2 versión 4.
111	Números de varilla de conteo	1D360-1D37F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
112	Sundanés	1B80-1BBF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
113	Lepcha	1C00-1C4F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
114	Ol Chiki	1C50-1C7F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
115	Saurashtra	A880-A8DF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
116	Kayah Li	A900-A92F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
117	Rejang	A930-A95F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
118	Cham	AA00-AA5F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
119	Símbolos antiguos	10190-101CF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
120	Disco de Festos	101D0-101FF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
121	Cario	102A0-102DF	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
Licia	10280-1029F	Añadido en OpenType 1.5 para OS/2 versión 4.
Lidio	10920-1093F	Añadido en OpenType 1.5 para OS/2 versión 4.
122	Losetas de dominó	1F030-1F09F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
Fichas de Mahjong	1F000-1F02F	Asignado por primera vez en OpenType 1.5 para OS/2 versión 4.
123-127`;

let regExp = /[0-9A-F]{4}-[0-9A-F]{4}/g;
console.log(arial.match(regExp));
console.log("uno dos 100 kddk 200".match(/\d+/g));
console.log(0x007f);

const unicodeArialStings = [
  "0000-007F",
  "0080-00FF",
  "0100-017F",
  "0180-024F",
  "0250-02AF",
  "1D00-1D7F",
  "1D80-1DBF",
  "02B0-02FF",
  "A700-A71F",
  "0300-036F",
  "1DC0-1DFF",
  "0370-03FF",
  "2C80-2CFF",
  "0400-04FF",
  "0500-052F",
  "2DE0-2DFF",
  "A640-A69F",
  "0530-058F",
  "0590-05FF",
  "A500-A63F",
  "0600-06FF",
  "0750-077F",
  "07C0-07FF",
  "0900-097F",
  "0980-09FF",
  "0A00-0A7F",
  "0A80-0AFF",
  "0B00-0B7F",
  "0B80-0BFF",
  "0C00-0C7F",
  "0C80-0CFF",
  "0D00-0D7F",
  "0E00-0E7F",
  "0E80-0EFF",
  "10A0-10FF",
  "2D00-2D2F",
  "1B00-1B7F",
  "1100-11FF",
  "1E00-1EFF",
  "2C60-2C7F",
  "A720-A7FF",
  "1F00-1FFF",
  "2000-206F",
  "2E00-2E7F",
  "2070-209F",
  "20A0-20CF",
  "20D0-20FF",
  "2100-214F",
  "2150-218F",
  "2190-21FF",
  "27F0-27FF",
  "2900-297F",
  "2B00-2BFF",
  "2200-22FF",
  "2A00-2AFF",
  "27C0-27EF",
  "2300-23FF",
  "2400-243F",
  "2440-245F",
  "2460-24FF",
  "2500-257F",
  "2580-259F",
  "25A0-25FF",
  "2600-26FF",
  "2700-27BF",
  "3000-303F",
  "3040-309F",
  "30A0-30FF",
  "31F0-31FF",
  "3100-312F",
  "31A0-31BF",
  "3130-318F",
  "A840-A87F",
  "3200-32FF",
  "3300-33FF",
  "AC00-D7AF",
  "0000-10FF",
  "0900-1091",
  "4E00-9FFF",
  "2E80-2EFF",
  "2F00-2FDF",
  "2FF0-2FFF",
  "3400-4DBF",
  "0000-2A6D",
  "3190-319F",
  "E000-F8FF",
  "31C0-31EF",
  "F900-FAFF",
  "F800-2FA1",
  "FB00-FB4F",
  "FB50-FDFF",
  "FE20-FE2F",
  "FE10-FE1F",
  "FE30-FE4F",
  "FE50-FE6F",
  "FE70-FEFF",
  "FF00-FFEF",
  "FFF0-FFFF",
  "0F00-0FFF",
  "0700-074F",
  "0780-07BF",
  "0D80-0DFF",
  "1000-109F",
  "1200-137F",
  "1380-139F",
  "2D80-2DDF",
  "13A0-13FF",
  "1400-167F",
  "1680-169F",
  "16A0-16FF",
  "19E0-19FF",
  "1800-18AF",
  "2800-28FF",
  "A000-A48F",
  "A490-A4CF",
  "1700-171F",
  "1720-173F",
  "1740-175F",
  "1760-177F",
  "0300-1032",
  "0330-1034",
  "0400-1044",
  "D000-1D0F",
  "D100-1D1F",
  "D200-1D24",
  "D400-1D7F",
  "0000-FFFF",
  "0000-10FF",
  "FE00-FE0F",
  "0100-E01E",
  "0000-E007",
  "1900-194F",
  "1950-197F",
  "1980-19DF",
  "1A00-1A1F",
  "2C00-2C5F",
  "2D30-2D7F",
  "4DC0-4DFF",
  "A800-A82F",
  "0000-1007",
  "0080-100F",
  "0100-1013",
  "0140-1018",
  "0380-1039",
  "03A0-103D",
  "0450-1047",
  "0480-104A",
  "0800-1083",
  "0A00-10A5",
  "D300-1D35",
  "2000-123F",
  "2400-1247",
  "D360-1D37",
  "1B80-1BBF",
  "1C00-1C4F",
  "1C50-1C7F",
  "A880-A8DF",
  "A900-A92F",
  "A930-A95F",
  "AA00-AA5F",
  "0190-101C",
  "01D0-101F",
  "02A0-102D",
  "0280-1029",
  "0920-1093",
  "F030-1F09",
  "F000-1F02",
];

function convertirArrayHexadecimal(array) {
  return array.map(function (item) {
    var partes = item.split("-");
    return [parseInt(partes[0], 16), parseInt(partes[1], 16)];
  });
}

const unicodeArialHexadecimal = convertirArrayHexadecimal(unicodeArialStings);
console.log(unicodeArialHexadecimal);

function simboloAleatorioLeng(probabilidades) {
  console.log(probabilidades);
  // Este bucle devuelve un numero aleatorio que se encuentre dentro de algun rango de los codigos de algun lenguaje
  let numeroAleatorio = Math.floor(Math.random() * probabilidades.length);

  // Encuentra el rango en función de las probabilidades
  let rangoSeleccionado;
  let probabilidadAcumulada = 0;

  // for (const rango of probabilidades) {
  //     probabilidadAcumulada += rango.probabilidad;

  //     if (numeroAleatorio <= probabilidadAcumulada) {
  //         rangoSeleccionado = rango.rango;
  //         break;
  //     }
  // }

  console.log(Math.floor(numeroAleatorio));
  rangoSeleccionado = probabilidades[numeroAleatorio];
  // Genera un número aleatorio dentro del rango seleccionado

  // No todos los rangos tienen la misma longitud y algunos tienen mas elementos que otros!!
  let numeroDentroDelRango;
  let rangoElegido;

    numeroDentroDelRango = Math.floor(
        Math.random() * (rangoSeleccionado[1] - rangoSeleccionado[0]) +
        rangoSeleccionado[0]
    );

  // console.log("\n");
  // console.log("Codigo: " + numeroDentroDelRango);

  // console.log(
  //     "prueba: " + String.fromCodePoint(numeroDentroDelRango).charCodeAt()
  // );

  return numeroDentroDelRango;
}


console.log(String.fromCodePoint(simboloAleatorioLeng(unicodeArialHexadecimal)))                                        
console.log(String.fromCodePoint(simboloAleatorioLeng(unicodeArialHexadecimal)) == "ᮘ");