// guardar el estado (columna activa)
let columnaActiva = 1


// seleccionar las columnas
const columnas = document.querySelectorAll(".columna")


// escuchar los clics en cada una de ellas
columnas.forEach ((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})


// cambiar estado de las columnas
function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}