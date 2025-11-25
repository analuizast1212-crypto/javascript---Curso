const prompt = require('prompt-sync') ({sigint: true});
const mensagens =[
    {id: 1, frase:"hoje o dia esta lindo!"} ,
    {id: 2, frase:"nao gostei desse trabalho"},
    {id: 3, frase:"a aula foi muito divertida"},
    {id:4, frase:"que tarefa chata"}
]
const resultado = mensagens.filter(u=>u.frase.includes("chata"))
console.log(resultado)
const resultado1 = mensagens.filter(u=>u.frase.includes("nao gostei"))
console.log(resultado1)
