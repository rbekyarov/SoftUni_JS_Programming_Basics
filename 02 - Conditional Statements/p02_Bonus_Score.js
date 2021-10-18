function bonus(num){
    num = Number(num);
    let bonusPoint = 0;
    if (num<=100){
         bonusPoint=5;
    }else if (num>100 && num<=1000){
        bonusPoint = 0.2*num;
    }else {
        bonusPoint = 0.1*num;
    }

    let secondBonusPoint = 0;
    if(num%2==0){
        secondBonusPoint = 1;
    }else if(num%10==5){
        secondBonusPoint = 2;
    }
    totalBonuses = bonusPoint+secondBonusPoint;
    result = totalBonuses+num;
    console.log(totalBonuses);
    console.log(result);
}
bonus(15875)