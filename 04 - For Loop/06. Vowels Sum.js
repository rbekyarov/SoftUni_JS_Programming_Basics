function solve (text){
    let value = 0;
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let symbol = text[i];
        
        switch (symbol){
            case "a":
                value = 1;
                break;
                case "e":
                value = 2;
                break;
                case "i":
                value = 3;
                break;
                case "o":
                value = 4;
                break;
                case "u":
                value = 5;
                break;
        }
        sum +=value;
        value=0;
        
    }
    console.log(sum);

}
solve ("bamboo");
