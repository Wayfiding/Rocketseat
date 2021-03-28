//for..in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}


for (let property in person){
    console.log(property)
    console.log(person[property])
}