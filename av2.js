const prompt = require('prompt-sync') ({sigint: true});

const produtos =[
    {id: 1, nome: "fone bluetooth"},
    {id: 2, nome: "mouse gamer"},
    {id: 3, nome: "fone com fio"},
    {id: 4, nome: "teclado"}
];
const resultado = produtos.filter(u=>u.nome.includes("fone"))
console.log(resultado)