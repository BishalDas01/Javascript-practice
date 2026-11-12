const product = [
    {id:1, name: "samsung", price: 40000},
    {id:2, name: "iphone", price: 40000},
    {id:3, name: "samsung", price: 40000},
    {id:4, name: "realme", price: 40000}
]

product.forEach(pd => {
    console.log(pd.id)
})

const mul = product.map(pd => pd.id*2)
console.log(mul)