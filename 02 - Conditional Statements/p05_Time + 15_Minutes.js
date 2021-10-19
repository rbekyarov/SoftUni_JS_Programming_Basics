function plus15Min (hours, minutes){
    hours= Number(hours);
    minutes= Number(minutes);

    let minutesTotal = hours*60 + minutes + 15;
    let hoursResult = minutesTotal/60;
    if(hoursResult>=24){
        hoursResult = 0;
    }
    let minutesResult = minutesTotal%60;

    if(minutesResult<10){
        console.log(`${Math.floor(hoursResult)}:0${minutesResult}`)
    }else{
        console.log(`${Math.floor(hoursResult)}:${minutesResult}`)
    }
}
plus15Min (23, 59)