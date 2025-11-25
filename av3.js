const prompt = require('prompt-sync') ({sigint: true});

const usuarios =[
    {nome: "joao", estado: "sp"},
     {nome: "marina", estado: "mg"},
      {nome: "caua", estado: "mg"},
       {nome: "ana", estado: "rj"},
   
];
const resultado = usuarios.filter(u=>u.estado.includes("mg"))
console.log(resultado)