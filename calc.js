function add (x, y) {
    return x + y;
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
    return operator(x, y);

}
let para = document.querySelector("p");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let input = [];

numberButtons.forEach(function(button){   
    button.addEventListener('click',function(){   
        para.textContent += button.id;
    })
})


