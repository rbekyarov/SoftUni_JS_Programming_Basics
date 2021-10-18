function areas (type,parameter1,parameter2){
    let area = "";
    if (type == "square"){
         area = parameter1*parameter1;
    
    }else if (type=="rectangle"){
         area = parameter1*parameter2;
    } else if (type =="circle"){
         area = Math.PI*parameter1*parameter1;

    }else if (type=="triangle"){
         area = parameter1*parameter2/2;
    }
    
    console.log(area.toFixed(3));
}
areas("rectangle",7,2.5);