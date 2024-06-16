//created calculator class 
class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
    //add operations of the calculator

    clear(){ //clears the numbers
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){ //deletes a number 

    }
    appendNumber(number){ //appends the numbers to the screen
        //this makes sure that the dot doen't get appened many time but once as intended by exiting the funtion
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        //this condition is so the function doen't run a empty string
        if(this.currentOperand === '') return 
        //this computes the already inserted values when it's computed with another number as long as it's not empty
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}




//initialized variables containing buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)


numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})