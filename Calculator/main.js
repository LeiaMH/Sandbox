const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const allClearButton = document.querySelector('.all-clear');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

//Add EventListeners
numberButtons.forEach(button => {button.addEventListener('click', addNumberToOutput)});
operationButtons.forEach(button => {button.addEventListener('click', addOperationToOutput)});
//equalsButton.forEach(button => {button.addEventListener('click', calculateResult)});
deleteButton.addEventListener('click', deleteFromOutput);
allClearButton.addEventListener('click', clearOutput);


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

//function calculateResult(){
//}