/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80-89     - B
* entre 70 - 79   - C
* entre 60 - 69   - D 
* menor que 60    - F

*/

let grade = 85
function getGrade(grade){

higherGrade = grade > 90 && grade <= 100
betweenGradeB = grade <= 89 && grade >= 80
betweenGradeC = grade <= 79 && grade >= 70
betweenGradeD = grade <= 69 && grade >= 60
lowerGrade = grade < 60 && grade >= 0

if(higherGrade){
    console.log('Nota A')
}else if(betweenGradeB){
    console.log('Nota B')
}else if(betweenGradeC){
    console.log('Nota C')
} else if(betweenGradeD){
    console.log('Nota D')

} else  if(lowerGrade){
    console.log( 'Nota F')
} else {
    console.log('Nota inválida')
}
}

getGrade(grade)

