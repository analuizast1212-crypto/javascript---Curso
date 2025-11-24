const prompt = require('prompt-sync') ({sigint: true});

const filmes =[
    {nome: "homem-aranha", categoria: "ação"},
    {nome: "vingadores", categoria: "ação"},
    {nome: "Carros", categoria: "animação"},
    {nome: "divertida mente", categoria: "animação"}
];

const resultado = filmes.filter(u=>u.categoria ==="ação")
console.log(resultado)
const resultado2= filmes.filter(f=>f.nome.includes("Carros"));
console.log(resultado2)
const resultado3= filmes.filter(f=>f.nome.includes("mente"));
console.log(resultado3)