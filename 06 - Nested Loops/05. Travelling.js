function solve (input){
    let location = input.shift();

    while (location!=="End"){
        let budget = Number(input.shift());
        let sumSpend = 0;
         while (budget>=sumSpend){

             let spend = Number(input.shift());
             sumSpend+=spend;
         }
        console.log(`Going to ${location}!`)

        location = input.shift()
    }
}
solve([
    'Greece', '1000', '200',
    '200',    '300',  '100',
    '150',    '240',  'Spain',
    '1200',   '300',  '500',
    '193',    '423',  'End',
    ''
]);