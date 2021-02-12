

const table_data = [
    {
        id: '1' ,   
        description: 'Luz',
        amount: -50001,
        date:'23/01/2021',
    },
    {
        id: '2' ,
        description: 'Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        id: '3' ,
        description: 'Internet',
        amount: -20012,
        date:'23/01/2021',
    },
    {
        id: '4' ,
        description: 'App',
        amount: 200000,
        date:'23/01/2021',
    },



]


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
    }
}


    

const App = {

    init(){
        table_data.forEach(function(testes){
            html_manipulation.adddata(testes)
        })
    },

    reload(){

        App.init()
    }
    
}

