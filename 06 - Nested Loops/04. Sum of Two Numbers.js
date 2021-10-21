function sumTwoNums(input) {
    let numberStart = Number(input.shift());
    let numberEnd = Number(input.shift());
    let magicNum = Number(input.shift());
    let count = 0;
    let sum = 0;
    let valid = false;
    for (let i = numberStart; i <= numberEnd; i++) {
        for (let j = numberStart; j <= numberEnd; j++) {
            count++;
            sum = i + j;
            if (sum === magicNum) {
                valid = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${i + j})`)
                break;
            }
        }
        if (valid) {
            break;
        }
    }
    if (!valid) {
        console.log(`${count} combinations - neither equals ${magicNum}`)
    }
}
sumTwoNums([1, 10, 5]);
sumTwoNums([23, 24, 20]);
sumTwoNums([88, 888, 1000]);