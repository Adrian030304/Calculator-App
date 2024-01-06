let display = document.querySelector(".display");
 
display.innerHTML = parseInt(0)

let numBtns = document.querySelector(".numBtn").children
console.log(numBtns)
let btnArr = [...numBtns]
btnArr.forEach(element => {
    console.log(element.innerHTML)
});
console.log(btnArr.innerHTML)
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