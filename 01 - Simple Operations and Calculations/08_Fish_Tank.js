function fishTank(length,width,height,percent){
let volume = length*width*height;
let liters = volume*0.001;
let totalLiters = liters*(1-percent/100);
console.log(totalLiters.toFixed(3));
}
fishTank(85,75,47,17);