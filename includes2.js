const prompt = require('prompt-sync') ({sigint: true});

const amigos =[
    {nome: "ana", cidade: "lavras"},
    {nome: "joao", cidade: "bom sucesso"},
    {nome: "bruno", cidade: "rio"},
    {nome: "mari", cidade: "fortaleza"}
];
const resultado = amigos.filter(u=>u.cidade==="rio")
console.log(resultado)
const resultado1= amigos.filter(u=>u.nome.includes("o"))
console.log(resultado1)