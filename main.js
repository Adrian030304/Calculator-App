let display = document.querySelector(".display");

display.textContent = ""

let operands = document.getElementsByClassName("operand");
console.log(operands)
let operators = document.getElementsByClassName("operator")
console.log(operators)
const operatorsArray = Array.from(operators)
const opArray = Array.from(operands)

let firstNumber = "";
let secondNumber = "";
let selectedOperator = "";


 operatorsArray.forEach((operator) => {
     operator.addEventListener("click", function(e) {
         selectedOperator = e.target.textContent;
         display.textContent += selectedOperator;


         
     });
 });
//function to take in the number of each button
 opArray.forEach((operand) => {
     operand.addEventListener("click", function(e) {
        const pressedNumber = e.target.textContent;
         if (selectedOperator === "") {
          
             firstNumber += pressedNumber;
         } else {
             secondNumber += pressedNumber;
         }
         display.textContent += pressedNumber;
     });
 });
 
 
 document.querySelector("#equal").addEventListener("click", function() {
     let result;
     switch (selectedOperator) {
         case "+":
             result = parseInt(firstNumber) + parseInt(secondNumber);
             break;
         case "-":
             result = parseInt(firstNumber) - parseInt(secondNumber);
             break;
         case "*":
             result = parseInt(firstNumber) * parseInt(secondNumber);
             break;
         case "/":
             result = parseInt(firstNumber) / parseInt(secondNumber);
             break;
         default:
             result = "Invalid operator";
     }
     display.textContent = result !== "Invalid operator" ? result : "Error: Check Input";
     firstNumber = "";
     secondNumber = "";
     selectedOperator = "";
 });
