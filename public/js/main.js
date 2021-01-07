/*
let jour = prompt("Entre un jour de la semaine"); 

switch(jour){
    case "lundi":
        console.log("C'est lundi et tu est as MG et puis au sport. "); 
    break;
    case "mardi":
        console.log("C'est mardi et tu a congé à MG et tu fais du shoping"); 
    break;
    case "mercredi":
        console.log("C'est mercredi et tu es en e-learning.");
    break; 
    case "jeudi":
        console.log("c'est jeudi et tu est a MG"); 
    break; 
    case "vendredi":
        console.log("c'est vendredi et tu prepare a un hackaton"); 
    break;
    default:
        console.log("Jour de la semaine en dehors de la semaine pro.."); 
}

    case "lundi" : case "mardi" : case : "mercredi" : 
    console.log(` ${jour} a molengeek `); 
    break;

    case "jeudi" : case "vendred" :  
    console.log(` ${jour} en elearning `); 
    break;

    case "samedi" : case "dimanche" :  
    console.log(` ${jour} conge `); 
    break;


*/

let age = parseInt(prompt("Entre ton age?")); 


switch(isNaN(age)){
    case true:
        console.log("pas un nombre");
    break;

    case false:
        switch (age >= 18){
            case true: console.log('Majeur'); break; 
            case false: console.log('Mineur'); break; 
        }
    break;
    default:
        console.log("age inconnu??");
    break; 
}