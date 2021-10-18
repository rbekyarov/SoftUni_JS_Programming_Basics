function speedInfo (speed){
    speed = Number(speed);
    let resultSpeed = "";
    if(speed<=10){
        resultSpeed = "slow";
    }else if (speed>10 && speed<=50){
        resultSpeed = "average";
    }else if (speed>50 && speed<=150){
        resultSpeed = "fast";
    }else if (speed>150 && speed<=1000){
        resultSpeed = "ultra fast";
    }else{
        resultSpeed = "extremely fast";
    }
    console.log(resultSpeed);

}