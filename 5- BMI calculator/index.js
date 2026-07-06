const weight= 70;
const height= 1.6;
const bmi= weight/(height*2);
console.log ("your BMI: " , bmi);
if (bmi< 18) {
    console.log("you are under weight");
}
else if(bmi>= 18 && bmi< 25){
    console.log(" you are normal");
}
else if(bmi>= 25 && bmi< 30){
    console.log(" you are overweight");
}
else{
    console.log(" you are obese!");
}
