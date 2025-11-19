const prompt = require('prompt-sync') ({sigint: true}); 
let nomes = ["Ana", "Matheus", "Dani"]

nomes.push("Makson")
nomes.push("Mariana")

let removido = nomes.pop()
console.log(removido)
console.log(nomes)