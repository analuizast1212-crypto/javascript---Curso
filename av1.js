const prompt = require('prompt-sync') ({sigint: true});

const alunos =[
    {nome: "ana", nota: 8},
    {nome: "joao", nota: 5},
    {nome: "bruno", nota: 9},
    {nome: "mari", nota: 4}
];

const resultado= alunos.filter(u=>u.nota>6)
console.log(resultado)