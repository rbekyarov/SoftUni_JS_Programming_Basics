function area (x1,y1,x2,y2){
    
    let length = Math.abs(x1-x2);
    let width = Math.abs(y1-y2);
    let area = length*width;
    let perimeter = 2*length+2*width;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
area (60,20,10,50);