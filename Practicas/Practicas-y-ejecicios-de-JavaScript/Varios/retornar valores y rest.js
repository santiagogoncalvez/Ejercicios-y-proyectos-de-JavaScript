function checkOut(name, ...prices) {
    const total = prices.reduce((acc, curr) => {
        return acc + curr
    })

    console.log(total)
}

checkOut("Juan", 10, 20, 30)