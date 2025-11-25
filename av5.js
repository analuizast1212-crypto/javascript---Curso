const prompt = require('prompt-sync') ({sigint: true});
const carros=[
    {modelos:"onix", marca: "chevrolet"},
     {modelos:"argo", marca: "fiat"},
      {modelos:"civic g10", marca: "honda"},
       {modelos:"mobi", marca: "fiat"},
]
const resultado = carros.filter(u=>u.marca.includes("fiat"))
console.log(resultado)