// function hoisting

sayMyName()

// funciona
function sayMyName()  {
    console.log('Mayk')
}

// Não sofre hoisting
const sayMyName = function()  {
    console.log('Mayk')
}

// Não sofre hoisting
var sayMyName = function()  {
    console.log('Mayk')
}