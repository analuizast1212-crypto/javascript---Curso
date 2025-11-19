const prompt = require('prompt-sync') ({sigint: true}); 
let mercado = []

mercado.push("Feijão")
mercado.push("arroz")
mercado.push("pão")
mercado.push("cereal")
mercado.push("frutas")
mercado.push("legumes")
mercado.push("bolacha")
mercado.push("balas")
mercado.push("shampoo")
mercado.push("iorgutes")
mercado.forEach((mercado, index)=>{
    console.log(`${index +1} . ${mercado}`);
})