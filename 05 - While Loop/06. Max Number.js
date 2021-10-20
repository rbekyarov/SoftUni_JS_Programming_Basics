function solve(input){
    let countNum=Number(input.shift());
    maxNumber = Number.MIN_SAFE_INTEGER;
    while(countNum>0){
        let currentNum = Number(input.shift());
        if(maxNumber<currentNum){
            maxNumber=currentNum;
        }

        countNum--;
    }
    console.log(maxNumber);
}
solve([2,100,99]);
solve([3,56,-5,6]);