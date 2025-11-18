const prompt = require('prompt-sync') ({sigint: true}); 
let playlist= ["Dua lipa- Dance the nigth", "The Weeknd"]

playlist.push("Emendou-Hungria");
playlist.push("Universo Particular-Hungria");
//removendo the weeknd
let removido = playlist.pop()
console.log(removido)

playlist.forEach((playlist, index)=>{
    console.log(`${index +1} . ${playlist}`);
})