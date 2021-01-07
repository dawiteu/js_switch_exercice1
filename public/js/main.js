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



let age = parseInt(prompt("Entre ton age?")); 

switch(age){
    case age > 18:
        console.log("Vous avez plus de 18 ans");
    break;

    case age < 18:
        console.log("Vous avez moins de 18 ans"); 
    break;
    case 18:
        console.log("tu as tout juste 18 ans");
    break;
    default:
        console.log("age inconnu??");
    break; 
}