function checkOut(...prices) {
    Array.isArray(prices) // 💪
    const total = prices.reduce((acc, curr) => acc + curr)
    console.log(total)
  }
  checkOut(1,2,3,6,9)
  checkOut(1,2,3,6,9,7,39)