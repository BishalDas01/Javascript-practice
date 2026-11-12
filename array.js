let arr = ["hero", 4, "alam", {name: "Barkat"}, ["iam", "number", 1]]

console.log(arr[3].name)
console.log( arr[4][2])

console.log(arr.length)
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(10) // push front
console.log(arr)

arr.shift() // pop front
console.log(arr)

for(let i=0; i<arr.length; i++)
{
    console.log(arr[i])
}