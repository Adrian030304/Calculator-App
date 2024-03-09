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

opArray.forEach((operand) => {
     operand.addEventListener("click", function(e) {
         if (selectedOperator === "") {
             firstNumber += e.target.textContent;
         } else {
             secondNumber += e.target.textContent;
         }
         display.textContent += e.target.textContent;
     });
 });
 
 operatorsArray.forEach((operator) => {
     operator.addEventListener("click", function(e) {
         selectedOperator = e.target.textContent;
         display.textContent += selectedOperator;
     });
 });
 

/* 
//functions for basic math operators
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
/*
const num1 ;
const operator;
const num2;

const operate = (num1,num2) => add(num1,num2);
*/

