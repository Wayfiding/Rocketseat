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



// Eu preciso somar as entradas
// depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total. 



const Transaction = {
    all: transactions = [
        {
            
            description: 'Luz',
            amount: -50001,
            date:'23/01/2021',
        },
        {
            
            description: 'Website',
            amount: 500000,
            date:'23/01/2021',
        },
        {
            
            description: 'Internet',
            amount: -20012,
            date:'23/01/2021',
        },
        {
            
            description: 'App',
            amount: 200000,
            date:'23/01/2021',
        },
       
    ],
    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()
    },
    remove(index) {
        Transaction.all.splice(index,1)

        App.reload()
    },

    incomes(){

        let income = 0;
        // pegar todas as transacoes
        Transaction.all.forEach(transaction => {
            // Para cada transação verificar se é positivo
            if (transaction.amount > 0) {
            income += transaction.amount;
            //Somar ao valor inicial
        }
        })
        return income
    },
    expenses() {
        let expense = 0;
        
        Transaction.all.forEach(transaction => {
            
            if (transaction.amount < 0) {
            expense += transaction.amount;
        }
        })
        return expense
    },
    total(){
        return (Transaction.incomes() + Transaction.expenses())

    }

}

// Substituir os dados do HTML com os 
// dados do JS.

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transaçao">
                </td>
        
                
        `
        return html
    },

    updateBalance(){
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total())
    },
    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

    
const Utils = {
    formatAmount(value) {
        value = Number(value) * 100
        return value
    },
    formatDate(date) {
        const splitteDate = date.split("-")
        return `${splitteDate[2]}/${splitteDate[1]}/${splitteDate[0]}`

    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g , "")


        value = Number (value)/100

        value = value.toLocaleString("pt-BR",{
            style: "currency", 
            currency: "BRL"
        })

        return signal + value
    }
}



const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return{
        description: Form.description.value,
        amount: Form.amount.value,
        date: Form.date.value
    }
    },
   
    validateFields() {
        const{ description, amount, date } = Form.getValues()
        console.log (Form.getValues())

        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error( "Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let{ description, amount, date } = Form.getValues()

        amount = Utils.formatAmount (amount)
        date = Utils.formatDate (date)

        return {
            description,
            amount,
            date
        }
    },
    submit(event){
        event.preventDefault()

        try {
            // verificar se todas as informacoes foram preenchidas
            Form.validateFields()
            // formatar os dados para salvar
            const transaction = Form.formatValues()
            // salvar 
            Transaction.add(transaction)
            // apagar os dados do formulario
            // modal fechar 
            // Atualizar a aplicação
        } catch (error) {
            alert(error.message)
        }

      
    }
}


const App ={

    init() {
        Transaction.all.forEach(function(transaction){
        DOM.addTransaction(transaction)
    }) 
    
    DOM.updateBalance()
    
    
    

    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}


App.init()


