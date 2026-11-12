let person = {
    name : "Bishal",
    age : 21,
    Father : {
        name : "Bhoirob",
        age : 57,
    },
}

console.log(person.name);
console.log(person.Father.name);

result = (["name" in person]);
console.log(result);