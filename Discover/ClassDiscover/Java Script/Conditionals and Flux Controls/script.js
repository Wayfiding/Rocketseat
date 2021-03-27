// if ..else

let temperature = 38
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if( highTemperature) {
    console.log('Febre Alta')

} else if(mediumTemperature)  {
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}
