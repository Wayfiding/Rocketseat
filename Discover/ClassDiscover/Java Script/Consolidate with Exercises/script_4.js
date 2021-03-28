/*
    ### Celsius em fahrenheit

    Crie uma função que receba uma strin em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F -32)* 5/9
    F =C *9/5 +32


*/

let temperature = '23F3 C'



function meterChange() {
    let whichMeterValue = (temperature.split(' ')[0])
    console.log(whichMeterValue)
    let whichMeter = (temperature.split(' ').splice(1))
    if(whichMeterValue.match(/^\d+$/g)){
        passRegex = Number(whichMeterValue.match(/^\d+$/g))
        
    if( typeof passRegex == 'number' ){
        if (whichMeter == 'C') {

            TempChange = passRegex * 9 / 5 + 32
            meter = 'F'
            return TempChange
        } else if (whichMeter == 'F') {
            TempChange = (passRegex - 32) * 5 / 9
            meter = 'C'
            return TempChange
        } else {
            throw new Error('Gradient not identified')
        }
    }
    
    
    
    } else {
        throw new Error('Temperature value is incorrectly')
   
    
    

}
}
try {
    meterChange()
    console.log(`A temperatura é ${TempChange} ${meter} `)
} catch (error) {
    console.log(error.message)
}


