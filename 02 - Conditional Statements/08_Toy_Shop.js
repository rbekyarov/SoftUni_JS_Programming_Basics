function priceForRest (budget,countPuzle, countBarbi, countBeer, countMinions, countTruck){
    let pricePuzle = 2.6*countPuzle;
    let priceBarbi = 3*countBarbi;
    let priceBeer = 4.10*countBeer;
    let priceMinions = 8.2*countMinions;
    let priceTruck = 2*countTruck;
   let price = pricePuzle+priceBarbi+priceBeer+priceMinions+priceTruck;
   let totalCount = countPuzle+countBarbi+countBeer+countMinions+countTruck;
    if(totalCount>=50){
        price = price - (price*0.25)

    }

    let totalPrice = price - (price*0.1);

    if (totalPrice>=budget){
        let diff = totalPrice - budget;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else{
        let diff = budget - totalPrice;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
priceForRest (320,8,2,5,5,1)
