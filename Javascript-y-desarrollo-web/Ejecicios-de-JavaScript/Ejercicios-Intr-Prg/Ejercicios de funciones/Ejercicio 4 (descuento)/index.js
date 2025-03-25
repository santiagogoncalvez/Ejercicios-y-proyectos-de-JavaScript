// Algoritmo descuento de un producto

function descuento(precio) {
    let descuento = precio * 0.05;
    return descuento
}

precioProducto = Number(prompt("Ingresar valor del producto"));

if (precioProducto > 150000) {
    console.log("el valor descuento del producto es de: ", descuento(precioProducto))
} else {
    console.log("no hay descuento del producto")
}