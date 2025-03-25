function soyUnClosure() {
    const variableLocal = "Juan"
    return function() {
      return variableLocal.toUpperCase()
    }
  }

const saludar = soyUnClosure()
saludar()

let vector = ["santiago","b","c"];
console.log(vector)