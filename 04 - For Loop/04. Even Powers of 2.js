function evenPower2(n){
    n=Number(n);
    for (let i = 0; i <=n ; i++) {
        if(i%2==0){
            console.log(Math.pow(2,i));
        }    
    }
}
evenPower2(6)