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



// Alterando estilos

const element9 = document.querySelector('body')

element9.style.backgroundColor = "#f9f3d2"
console.log(element9.style.backgroundColor)


// Alterando estilos

// classlist 

const element10 = document.querySelector('body')
element10.classList.add('active', 'green')
console.log(element10.classList)
//element.classList.remove('active')
element10.classList.toggle('active')


// Navegando pelos elementos
// parentNode parentElement 

//const body = document.querySelector('body')

console.log(element10.parentElement)
console.log(element10.parentNode)

//Navegando pelos elementos

// childNodes children 

const el = document.querySelector('body')

console.log(el.children)

// firstChild (leva em consideração o espaço vazio) firstElementChild (não leva em consideração o espaço vazio)
console.log(el.firstChild)
console.log(el.firstElementChild)


// lastChild lastElementChild

console.log(el.lastChild)
console.log(el.lastElementChild)

// Navegando pelos elementos 

const el2 = document.querySelector('header')

// nextSibling nextElementSibling
console.log(el2.nextSibling)
console.log(el2.nextElementSibling)

// previousSibling previousElementSibling
console.log(el2.previousSibling)
console.log(el2.previousElementSibling)











// Adicionando elementos 

const div = document.createElement('div');
div.innerText = "Olá Devs!"

// insertBefore insert
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div,script)


// insertBefore truque simulando insertAfter

const header2 = body.querySelector('header')
body.insertBefore(div, header2.nextSibling)

// Eventos

function print() {

    console.log('print')
}


// Eventos de teclado 

const input = document.querySelector('input')

input.onkeydown = function () {
    console.log('rodei')
}

// Diversos eventos via JS 

const h1 = document.querySelector('h1');
h1.addEventListener('click', print)

function print() {
    console.log('print')
}


// Outro evento empilhamento pelo addEventListener

h1.addEventListener('click',function () {

    console.log('outro momento')
})

// Eventos 
// argumento event

const input2 = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}
