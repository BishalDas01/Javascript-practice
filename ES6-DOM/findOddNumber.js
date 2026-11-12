const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumber = (array) => {
    let even = []
    let odd = []
    for(let i=0; i<array.length; i++){
        if(array[i]%2 == 0)
            even.push(array[i])
        else odd.push(array[i])
    }
    return even
}

const result = evenNumber(numbers)
console.log(result)
console.log("hello friends")