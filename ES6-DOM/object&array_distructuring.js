const person = {
    name : "hello",
    age : 834,
    friends : ["ami", "tmi", "se", "uni"]
}

const {friends,age} = person // friends and age will act as variable 
// now we can use simply friends , age without person.friends or person.age
// this is called object distructuring
// the variable name must be present in the class

console.log(friends)
console.log(age)

// array distructuring 
const details = ["abul", 34, "hello, my name is abul, but the abul you are thinking about me i am not that abul."]

const [name, boyos, description] = details

console.log(name)