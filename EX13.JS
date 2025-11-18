const prompt = require('prompt-sync') ({sigint: true}); 

let nota1 = Number(prompt ('Digite sua 1º nota:'))
let nota2 = Number(prompt('Digite sua 2º nota:'))
let nota3 = Number( prompt ('Digite sua 3º nota:'))

soma= nota1+ nota2+ nota3
console.log("Total de pontos:", soma)

if (soma < 1000){
    console.log("Você pode tentar novamente em 2026...")}

if (soma ==1000 <= 1499){
    console.log("Você foi aprovado na Unilavras!")
}

if (soma > 1500){
    console.log("Você foi aprovado na Ufla!")
}