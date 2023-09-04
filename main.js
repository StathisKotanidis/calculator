let display = document.querySelector('.screen')
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
let deleteLastNumber = document.querySelector('#delete')


let inputsArray = []
let currentInput = ''


function operate(a, operator, b) {

    if (operator == '+') {
        return a + b
    } else if (operator == '-') {
        return a - b
    } else if (operator == "X") {
        return a * b
    } else if (operator == '/') {
        return a / b
    } else {
        console.log('Error')
    }
}

function updateDisplay() {

    display.textContent = currentInput;
}

function captureEveryInput() {

    //console.log('Before the push')
    inputsArray.push(currentInput)
    return inputsArray
}

zero.addEventListener('click', () => {
    currentInput += '0';
    captureEveryInput()
    updateDisplay();
});

one.addEventListener('click', () => {
    currentInput += '1';
    captureEveryInput()
    updateDisplay();
});

two.addEventListener('click', () => {
    currentInput += '2';
    captureEveryInput()
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

    currentInput = ''
    updateDisplay()

})

deleteLastNumber.addEventListener('click', () => {
    captureEveryInput().pop()
})


addition.addEventListener('click', () => {
    currentInput += ' + ';
    updateDisplay();
})

subtraction.addEventListener('click', () => {
    currentInput += ' - ';
    updateDisplay();
})

multiplication.addEventListener('click', () => {
    currentInput += ' X ';
    updateDisplay();
})

division.addEventListener('click', () => {
    currentInput += ' / ';
    updateDisplay();
})

equal.addEventListener('click', () => {

    let myarray = currentInput.split(' ')
    currentInput = operate(parseFloat(myarray[0]), myarray[1], parseFloat(myarray[2]))
    updateDisplay()

})




