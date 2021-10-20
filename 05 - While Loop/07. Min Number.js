function solve(input){
    let countNum=Number(input.shift());
    minNumber = Number.MAX_SAFE_INTEGER;
    while(countNum>0){
        let currentNum = Number(input.shift());
        if(minNumber>currentNum){
            minNumber=currentNum;
        }

        countNum--;
    }
    console.log(minNumber);
}
solve([2,100,99]);