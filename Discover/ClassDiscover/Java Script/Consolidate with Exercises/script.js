/*
   ## Buscando e contando dados em Arrays =

   Baseado no Array de Livros por Categorias abaixo, faça os seguintes desafios

        *Contar  o número de categorias e o número de livros em cada categoria.
        *Contar o número de autores.
        *Mostrar livros do autor Augusto Cury.
        *Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.


*/

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title:"Os segregos de mente milionaria",
                author:"T. Harv Eker"
            },
            {
                title:"O homem mais rico da Babilônia",
                author:"George S. Clason",
                
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T.Kiyosaki e Sharon L.Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books:[
            {
                title:"Você é Insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },




];




let counterCategory = bookByCategory.length
console.log('O número de Categorias é: ',counterCategory)
for(let category of bookByCategory){
    console.log('Total de livros da categorias: ', category.category)
    console.log(category.books.length)
}
function countAuthor(){
    let authors = []

    for(let category of bookByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log(authors.length)
}

countAuthor()

function booksOfAuthor(author){
    let books = []

    for(let category of bookByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason')

