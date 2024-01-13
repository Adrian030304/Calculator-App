let display = document.querySelector(".display");

display.innerHTML = ""

let operands = document.getElementsByClassName("operand");
console.log(operands)
let operators = document.getElementsByClassName("operator")
console.log(operators)
const opArray = [...operands]
/*
for(let i = 0; i < operands.length; i++){
     operands[i].addEventListener("click", function() { 
          const clickedNumber = parseInt(operands[i].textContent);
          console.log(clickedNumber)
          display.innerHTML += clickedNumber;
     })
     
}
*/
opArray.forEach((operand) => {
     console.log(operand.textContent)
     operand.addEventListener("click",function(e){
          const clickedNumber = parseInt(e.target.textContent)
          display.textContent += clickedNumber;
     })
     
});




//functions for basic math operators
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
/*
const num1 ;
const operator;
const num2;
*/
const operate = (num1,num2) => add(num1,num2);