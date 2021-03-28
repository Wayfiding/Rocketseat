/*
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

        * receitas: []
        * despesas: []


    Agora crie um função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.


*/

let family = {
    income:[
    2500,3300.34,4000
    ],
    
    expenses:[
       700,2000,3500,900
    ]
};


function sum(arrayOfFamily){
    let total = 0;
    for(let value of arrayOfFamily) {
        total += value
    }


    return total
}


function calculateBalance(){
    const calculateIncomes = sum(family.income)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0

    let balanceText = "negativo"
    if( itsOk){
        balanceText ="positivo"
    } 

    console.log(`Seu saldo é ${balanceText}:R$ ${total}`)
}


calculateBalance()