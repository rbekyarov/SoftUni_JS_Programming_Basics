function comb(input){
    let num = Number(input.shift());
    let countCombination=0;
    for (let i = 0; i <=num ; i++) {
        for (let j = 0; j <=num ; j++) {
            for (let k = 0; k <=num ; k++) {
                if(i+j+k===num){
                    countCombination++;
                }
            }
        }
    }
    console.log(countCombination);
}
comb([25]);
comb([20]);
comb([5]);