const  num1 = 6;
const num2 = 5;
const operator = "+";
switch (operator) {
    case "+" :
        console.log(operator , num1 + num2)
        break;
     case "-" :
        console.log(operator , num1 - num2)
        break;
    case "*" :
        console.log(operator , num1 * num2)
        break;
    case "/" :
        console.log(operator , num1 / num2)
        break;
        default:
        console.log(operator , "Not a valid operator!");
}
