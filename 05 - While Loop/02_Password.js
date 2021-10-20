function checkPassowrd(input){
    let username = input.shift();
    let password = input.shift();
    let currentPass = input.shift();

    while(currentPass!=password){
        currentPass=input.shift();
    }
    console.log(`Welcome ${username}!`);
}
checkPassowrd(["Nakov","1234","pass","1324","1234"]);