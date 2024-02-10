import { unicode15 } from "./caracteres-unicode-15.1";

let regExp = /[0-9A-F]{4}/g;

let codes = unicode15.match(regExp);
console.log(codes);