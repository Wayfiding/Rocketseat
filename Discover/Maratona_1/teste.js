
 table_data = [
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
 ]



const data_loading = {
    all: table_data
    ,
    
    
    
    add(table_data) {
        data_loading.all.push(table_data)
        App.reload()
    },

    remove (index) {
        data_loading.all.splice(index,1)

        App.reload()

        
    }

}

const html_manipulation ={
    table_users: document.querySelector('#data-table tbody'),

    adddata(table_data, teste){
        
        const tr = document.createElement('tr')
        tr.innerHTML = html_manipulation.innerHTML_modelation(table_data)

        html_manipulation.table_users.appendChild(tr)
    },

    innerHTML_modelation(table_data){
        const html = `
        
            <td class="description">${table_data.description}</td>
            <td class="amount">${table_data.amount}</td>
            <td class="date">${table_data.date}</td>
                
        
                
        `
        return html
    },
    
        clear_table()  {
            html_manipulation.table_users.innerHTML = ""

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
   
    submit(event){
        event.preventDefault()

        try {
            // verificar se todas as informacoes foram preenchidas
            Form.validateFields()
            // formatar os dados para salvar
            const table_data = Form.getValues()
            // salvar 
            data_loading.add(table_data)
            // apagar os dados do formulario
            // modal fechar 
            // Atualizar a aplicação
        } catch (error) {
            alert(error.message)
        }

       
    }
}
    

const App = {

    init(){
        data_loading.all.forEach( table_data =>{
            html_manipulation.adddata(table_data)
        })
    },

    reload(){
        html_manipulation.clear_table()
        App.init()
    }
    
}

App.init()