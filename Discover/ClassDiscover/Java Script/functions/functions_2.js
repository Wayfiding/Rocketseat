//function expression
//function anonymous


// parâmetros(parameters)

const sum = function (number1,number2){
    let total = number1 + number2 // lembrar de usar o let
    document.getElementById("teste").innerHTML = total
    return total // cuidado ao retorna valor com outras váriaveis declaradas.
   
    
}
let number1=34
let number2=25

//sum(number11,number22) // arguments - argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é  ${sum(number1,number2)}`)

console.log(total)