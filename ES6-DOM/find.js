const product = [
    {id:1, name: "samsung", price: 40000},
    {id:2, name: "samsung", price: 40000},
    {id:3, name: "samsung", price: 40000},
    {id:4, name: "samsung", price: 40000}
]

for(let i=0; i<product.length; i++){
    if(product[i].id == 2)
        console.log(product[i])
}

// with find

const result = product.find(pd => pd.id==4)
console.log(result)