function add (x, y) {
    return Number(x) + Number(y);
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (operator, x, y){
    if (operator == "add"){
        return add(x,y);
    }
    if (operator == "subtract"){
        return subtract(x,y);
    }
    if (operator == "divide"){
        return divide(x,y);
    }
    if (operator == "multiply"){
        return multiply(x,y);
    }
}

function clear (){
    inputNumber = "";
    operator = "";
    para.textContent = "";
    inputs = [];
}

let para = document.querySelector("p");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let inputNumber = "";
let operator = "";
let inputs = [];

numberButtons.forEach(function(button){   
    button.addEventListener('click',function(){   
        inputNumber += button.id;
        para.textContent = inputNumber;
    })
})

operatorButtons.forEach(function(button){
    button.addEventListener('click',function(){
        operator = button.id;
        inputs.push(inputNumber);
        inputNumber = "";
    })
})

let equals = document.querySelector('#operate');

equals.addEventListener('click',function(){
    inputs.push(inputNumber);
    inputNumber=operate(operator,inputs[inputs.length-2],inputs[inputs.length-1]);
    para.textContent = inputNumber;
    
})

document.querySelector('#clear').addEventListener('click',function(){
    clear();
})

