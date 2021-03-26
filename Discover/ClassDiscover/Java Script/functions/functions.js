/*

    Function() construtor


    * expressão new
    * criar um novo objeto
    * this keyword



*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return  this.name + " está andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())