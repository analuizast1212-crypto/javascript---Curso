const prompt = require('prompt-sync') ({sigint: true}); 
let numeros=[3,5,8,15,18,25]
let contador =0

numeros.forEach(( numero, index)=>{
    if(numero > 10)
    contador = contador +1
})
console.log("Quantidade é igual:", contador)
   

