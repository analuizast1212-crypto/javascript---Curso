const prompt = require('prompt-sync') ({sigint: true}); 

let numeros =[10,20,30,40]
let dobrados= numeros.map((numero) =>{
    return numero *2
})
console.log(dobrados)