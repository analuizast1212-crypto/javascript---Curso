const prompt = require('prompt-sync') ({sigint: true}); 
 let notas =[4.5, 8, 6.5, 9, 3]
 let aprovados = notas.filter((nota)=>{
    return nota >= 7
 })
 console.log(notas)//todas
 console.log(aprovados)