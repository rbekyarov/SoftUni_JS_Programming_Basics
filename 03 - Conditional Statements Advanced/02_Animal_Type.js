function typeAnimal (animal){
let type = "";
switch(animal){
    case "dog":
        type = "mammal";
        break;
    case "crocodile":
    case "tortoise":
    case "snake":
        type = "reptile";
        break;
        default :
        type = "unknown";
}
console.log(type);
}
typeAnimal ("snake")