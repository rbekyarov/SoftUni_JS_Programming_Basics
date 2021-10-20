function solve(input){
    let nameStudent = input.shift();
    let gradeCount = 12;
    let sumGrade=0;
    
    while(gradeCount>0){
       let grade = Number(input.shift());
    sumGrade +=grade;
        gradeCount--;
    }
    let averageGrade = sumGrade/12;
 console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}
solve([
    'Pesho', '4',    '5.5',
    '6',     '5.43', '4.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5',     '6'
  ])