//Scanning of Numbers in the calculator.
const num1 = parseFloat(prompt("Enter number 1"));
const num2 = parseFloat(prompt("Enter number 2"));
//Scanning of operators in calculator.
const operator = prompt("Enter operator to use: (+,-,*,/,)");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
  alert("error!,Refresh and try again.")}
 else{
   if (operator == "+" )
  {result = num1+ num2;}
  else if (operator == "-")
  {result = num1-num2;}
  else if (operator == "*" )
  {result = num1*num2;}
  else if (operator == "/")
    {result = num1/num2;}
alert(num1 + ' ' + operator + '' + num2 + ' = ' + result );
 }