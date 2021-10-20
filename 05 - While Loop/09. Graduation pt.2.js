function solve(input){
    let nameStudent = input.shift();
    let gradeCount = 0;
    let sumGrade=0;
    
    let countNegativegrade = 0;
    let isExcluded = false; 
    while(gradeCount<=11){
       let grade = Number(input.shift());
       if (grade>=4){
        gradeCount++;
       } else{
           countNegativegrade++; 
       }
       if(countNegativegrade==2){
        isExcluded = true;
        //gradeCount--;
           break;
       }
       sumGrade +=grade;
    
    }
    if(isExcluded){
        console.log(`${nameStudent} has been excluded at ${gradeCount+1} grade`)
    }else{
        let averageGrade = sumGrade/gradeCount;
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}


  solve([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ]);

  solve([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
]);