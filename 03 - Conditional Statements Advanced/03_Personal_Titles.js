function personalTitles(age, gender){
age = Number(age);
let titles = "";
   if (age<16 && gender=="m"){
       titles = "Master"
   } else if (age>=16 && gender=="m"){
     titles = "Mr."
}else if (age<16 && gender=="f"){
    titles = "Miss"
}else if (age>=16 && gender=="f"){
    titles = "Ms."
}
console.log(titles);
}
