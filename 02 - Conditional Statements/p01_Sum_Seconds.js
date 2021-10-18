function sumSeconds  (seconds1,seconds2,seconds3){
    seconds1 = Number(seconds1);
    seconds2 = Number(seconds2);
    seconds3 = Number(seconds3);
    let sumSec = seconds1+seconds2+seconds3;
    let minutes = Math.floor(sumSec/60)
    let seconds = sumSec%60;
    
    if(seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(35,45,44)
sumSeconds(50,50,49)