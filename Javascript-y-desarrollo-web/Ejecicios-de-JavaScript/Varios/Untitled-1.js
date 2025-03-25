function saludar(nombre, apellido = "Núñez") {
    console.log(`Soy ${nombre} ${apellido}`);
}
saludar("Santiago")

const decir = function () {
    console.log("Hola me llamo Juan")
}
decir()

const hablar = () => {
    console.log("Hola me llamo elias")
}
hablar()

const mayuscula = (nombre) => {
    nombre = nombre.toUpperCase()
    return nombre
}
let nombre = mayuscula("Santiago")
console.log(nombre)


