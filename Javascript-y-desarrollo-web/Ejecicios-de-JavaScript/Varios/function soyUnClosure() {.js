function soyUnClosure() {
    const variableLocal = "Juan"
    return function () {
        return variableLocal.toUpperCase()
    }
}
var saludar = soyUnClosure()
console.log(saludar())
let hola = "hola";