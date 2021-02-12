// getElementById()


console.log(document.getElementById('blog-title')); // Retorna element


// getElementByClassName()

const element1 = document.getElementsByClassName('one'); // HTML Collection
console.log(element1)


// getElementsByTagName()


const element = document.getElementsByTagName('h1') // HTML Collection
console.log(element)

// querySelector()
const element3 = document.querySelector('meta') // Retorna Element
console.log(element3)

// querySelectorAll()

const element4 = document.querySelectorAll('.one') // Nodelist
console.log(element4)

// Manipulando Conteúdo 
// textContent

const element5 = document.querySelector('h1')

element5.textContent +=' Olá Devs!' 

console.log(element5.textContent)

// Manipulando conteúdo
// innerText

const element6 = document.querySelector('h1')

element6.innerText = "Testando Devs!"


// Manipulando Conteúdo
// innerHTMLT

const element7 = document.querySelector('h1')
element7.innerHTML = " Olá Devs <small>!!!</small>"

// Manipulando conteúdo
// value

const element8 = document.querySelector('input')

console.log(element8.value)


element8.value = "valor que eu quiser"


// Manipulando elementoss
// Atributos

const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')
header.setAttribute('class', 'bg header')