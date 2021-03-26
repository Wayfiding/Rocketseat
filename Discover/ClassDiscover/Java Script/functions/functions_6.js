// callback functions

function sayMyName(name){
    console.log('antes de executar a função callback')

    name()

    console.log('Depois de executar um callback')

}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)