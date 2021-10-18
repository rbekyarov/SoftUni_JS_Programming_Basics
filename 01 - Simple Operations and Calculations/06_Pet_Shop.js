function petShop (countDog, countAnimals){
let priceForDog = countDog*2.5;
let priceForAnimals = countAnimals*4;
let totalPrice = priceForDog+priceForAnimals
console.log(totalPrice.toFixed(2)+" lv.")

}
petShop(5,4)