let display = document.querySelector('.display')
let zero = document.querySelector('#zero')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let addition = document.querySelector('#plus')
let subtraction = document.querySelector('#minus')
let multiplication = document.querySelector('#multiply')
let division = document.querySelector('#divide')
let equal = document.querySelector("#equal")
let clear = document.querySelector('#clear')
let currentInput = ''


function adding(a, b) {
    return a + b
}

function subtracting(a, b) {
    return a - b
}

function multiplying(a, b) {
    return a * b
}

function dividing(a, b) {
    return a / b
}

function operate(a, operator, b) {

    if (operator == '+') {
        return adding(a, b)
    } else if (operator == '-') {
        return subtracting(a, b)
    } else if (operator == "*") {
        return multiplying(a, b)
    } else if (operator == '/') {
        return dividing(a, b)
    } else {
        console.log('Error')
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}


one.addEventListener('click', () => {
    currentInput += '1';
    updateDisplay();
});

two.addEventListener('click', () => {
    currentInput += '2';
    updateDisplay();
});

three.addEventListener('click', () => {
    currentInput += '3';
    updateDisplay();
});

four.addEventListener('click', () => {
    currentInput += '4';
    updateDisplay();
});

five.addEventListener('click', () => {
    currentInput += '5';
    updateDisplay();
});

six.addEventListener('click', () => {
    currentInput += '6';
    updateDisplay();
});

seven.addEventListener('click', () => {
    currentInput += '7';
    updateDisplay();
});

eight.addEventListener('click', () => {
    currentInput += '8';
    updateDisplay();
});

nine.addEventListener('click', () => {
    currentInput += '9';
    updateDisplay();
});

clear.addEventListener('click', () => {
    currentInput = ' '
    updateDisplay()
})