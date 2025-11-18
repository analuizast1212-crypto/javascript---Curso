const prompt = require('prompt-sync') ({sigint: true}); 
let lanches = ["x-burguer", "pizza", "sushi", "açaí"]

let removido = lanches.pop()
console.log(removido)
console.log(lanches)