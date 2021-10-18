function metrConverter(value,from,to) {
    value=Number(value);
    let result = 0;
    if (from =="mm" && to=="m"){
        result = value/1000;
    }else if(from =="m" && to=="cm"){
        result = value*100;
    }else if(from =="cm" && to=="mm"){
        result = value*10;
    }else if(from =="mm" && to=="cm"){
        result = value/10;
    }else if(from =="cm" && to=="m"){
        result = value/100;
    }else if(from =="m" && to=="mm"){
        result = value*1000;
    }
    console.log(`${result.toFixed(3)}`);

}
metrConverter(12,"mm","m")
