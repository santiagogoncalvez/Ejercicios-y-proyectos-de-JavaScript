// retornar valores
function checkOut(name, ...prices) {
    const total = prices.reduce((acc, curr) => {
        return acc + curr
    })

    return name + " purchased " + total + " US"
}

const result = checkOut("Juan", 10, 20, 30)
console.log(result)