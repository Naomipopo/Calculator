//Scanning of Number 1 in the calculator.
const num1 = parseFloat(prompt("Enter number 1"));
//Scanning of operators in calculator.
const operator = prompt("Enter operator to use: (+,-,*,/,)");
//Scanning of Number 2 in the calculator.
const num2 = parseFloat(prompt("Enter number 2"));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
  alert("Error!,Refresh and try again.")}
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