function pedirPizza(UID, pizza) {
    const pedido = `PEDIDO_${pizza}`
    return function() {
        return `${pedido}_${pizza}`
    }
}

const pedidoUID = pedirPizza(12345)




