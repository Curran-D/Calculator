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
    if (y == 0){
        return "Divide by zero error"
    } else {
        return x / y;
    }
}


function operate (calc){
    if (!Number(calc[0])){
        return "Error - start with a number";
    } else {
        while (calc.length > 1){
            for (let i = 0; i <calc.length; i++){
                if (calc[i] == "/"){

                    calc.splice(i-1 ,3 ,divide(calc[i-1],calc[i+1]));
                }
            }
            for (let i = 0; i <calc.length; i++){
                if (calc[i] == "*"){

                    calc.splice(i-1 ,3 ,multiply(calc[i-1],calc[i+1]));
                }
            }
            for (let i = 0; i <calc.length; i++){
                if (calc[i] == "+"){

                    calc.splice(i-1 ,3 ,add(calc[i-1],calc[i+1]));
                }
            }
            for (let i = 0; i <calc.length; i++){
                if (calc[i] == "-"){

                    calc.splice(i-1 ,3 ,subtract(calc[i-1],calc[i+1]));
                }
            }    
        }
        return calc[0];
    }
}


function clear (){
    inputNumber = "";
    para.textContent = "";
    inputs = [];
}

function display (x){
    if (answerDisplayed){
        para.textContent = "";
        answerDisplayed = false;
    }

    para.textContent += x;

}

let para = document.querySelector("p");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let inputNumber = "";
let inputs = [];
let equals = document.querySelector('#operate');
let answerDisplayed = false;

numberButtons.forEach(function(button){   
    button.addEventListener('click',function(){   
        inputNumber += button.id;
        display(button.id);
    })
})

operatorButtons.forEach(function(button){
    button.addEventListener('click',function(){       
        inputs.push(inputNumber);
        inputs.push(button.id);
        inputNumber = "";
        display(` ${button.id} `)        
    })
})

equals.addEventListener('click',function(){
    
        inputs.push(inputNumber);
        let answer = operate(inputs);
        clear();
        display(answer);
        answerDisplayed = true;

})

document.querySelector('#clear').addEventListener('click',function(){
    clear();
})

