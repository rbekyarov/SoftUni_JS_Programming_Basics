function solve(input){
    let finishNum = Number(input.shift());{
       let currentNumber = 1;
        while (currentNumber<=finishNum){
            console.log(currentNumber)
            currentNumber = currentNumber*2 + 1;
        }
    }
}
solve([8])