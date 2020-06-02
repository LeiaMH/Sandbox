//Variables
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const allClearButton = document.querySelector('.all-clear');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

//EventListeners
numberButtons.forEach(button => {button.addEventListener('click', addNumberToOutput)});
operationButtons.forEach(button => {button.addEventListener('click', addOperationToOutput)});
deleteButton.addEventListener('click', deleteFromOutput);
allClearButton.addEventListener('click', clearOutput);
equalsButton.addEventListener('click', calculateResult);


//Functions
function addNumberToOutput(){
    if(this.innerText === '.' && currentOperand.innerText.includes('.')){
        return;
    } else{
        currentOperand.innerText += this.innerText;
    }}

function addOperationToOutput(){
    currentOperand.innerText += this.innerText;
    previousOperand.innerText = currentOperand.innerText;
    currentOperand.innerText = '';
    }

function deleteFromOutput(){
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
}

function clearOutput(){
    currentOperand.innerText = '';
    previousOperand.innerText = '';
}

function calculateResult(){

    let operator = previousOperand.innerText.slice(previousOperand.innerText.length - 1);
    let firstNumber = parseFloat(previousOperand.innerText.slice(0, -1));
    let secondNumber = parseFloat(currentOperand.innerText);

   switch(operator){
    case '÷':
        result = firstNumber / secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
   }

   previousOperand.innerText = '';
   currentOperand.innerText = result;
}