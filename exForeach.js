const prompt = require('prompt-sync') ({sigint: true}); 
let games=["minecraft","fortnite", "roblox"]

games.forEach((game, index)=>{
    console.log(`${index +1} . ${game}`);
})