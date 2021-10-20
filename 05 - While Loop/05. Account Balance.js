function solve(input){
    let countPayment = Number(input.shift());
    
    let total = 0;
    while(countPayment>0){
        let valuePayment = Number(input.shift());
        if(valuePayment<=0){
            console.log("Invalid operation!" );
            break;

        }else{
            console.log(`Increase: ${valuePayment.toFixed(2)}`);
            total +=valuePayment;
        }
        
        countPayment--;
        
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
solve([3,5.51,69.42,100]);
