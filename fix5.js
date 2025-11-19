const prompt = require('prompt-sync') ({sigint: true}); 
let pedidos=[]

pedidos.push("tenis")
pedidos.push("roupa")
pedidos.push("bolsa")
pedidos.push("cremes")

pedidos.pop()
pedidos.pop()

console.log("pedidos restantes:", pedidos)