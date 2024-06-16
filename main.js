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

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
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