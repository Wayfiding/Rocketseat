const Modal = {
    open(){
        // Abrir Modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .add('active')

    },
    close(){
        // Fechar o modal
        // Remover a class active no modal
        document.querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}


const transaction = [
    {
        id:1,
        description: 'Luz',
        amount: -50000,
        date:'23/01/2021',
    },
    {
        id:2,
        description: 'Website',
        amount: -500000,
        date:'23/01/2021',
    },
    {
        id:3,
        description: 'Internet',
        amount: -20000,
        date:'23/01/2021',
    },
   
]
// Eu preciso somar as entradas
// depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total. 



const Transaction = {
    incomes(){
        // Somar todas as Entradas

    },
    expenses() {
        // Somas as saídas

    },
    total(){
        // Entradas - Saidas

    }

}

// Substituir os dados do HTML com os 
// dados do JS.

const DOM = {
    innerHTMLTransaciton() {
        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transaçao">
                </td>
        </tr>
                
        `
    }
}