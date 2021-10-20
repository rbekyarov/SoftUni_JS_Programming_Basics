function sumNum(input){
    let num = input.shift();
    let sum = 0;
    while(num!="Stop"){
        let number = Number(num)
        sum+=number;
        num = input.shift();
        
    }
    console.log(sum);
}
sumNum([10,20,30,45,"Stop"]);