function readText(input){
    let firstName = input.shift();
    let count = 0;
    while(firstName!="Stop"){
        count++;
        input = input.shift();
    }
    console.log(count);
}
readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop"]);