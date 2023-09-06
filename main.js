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
let deleteLastDigit = document.querySelector('#delete')

let currentInput = []

function operate(a, operator, b) {

    if (operator == '+') {
        return a + b
    } else if (operator == '-') {
        return a - b
    } else if (operator == "*") {
        return a * b
    } else if (operator == '/') {
        return a / b
    } else {
        console.log('Error')
    }
}

function updateDisplay() {

    let displayValue = currentInput.join('');
    display.textContent = displayValue

}

zero.addEventListener('click', () => {
    currentInput.push(0)
    updateDisplay();
});

one.addEventListener('click', () => {
    currentInput.push(1)
    updateDisplay();
});

two.addEventListener('click', () => {
    currentInput.push(2)
    updateDisplay();
});

three.addEventListener('click', () => {
    currentInput.push(3)
    updateDisplay();
});

four.addEventListener('click', () => {
    currentInput.push(4)
    updateDisplay();
});

five.addEventListener('click', () => {
    currentInput.push(5)
    updateDisplay();
});

six.addEventListener('click', () => {
    currentInput.push(6)
    updateDisplay();
});


seven.addEventListener('click', () => {
    currentInput.push(7)
    updateDisplay();
});

eight.addEventListener('click', () => {
    currentInput.push(8)
    updateDisplay();
});

nine.addEventListener('click', () => {
    currentInput.push(9)
    updateDisplay();
});

clear.addEventListener('click', () => {

    display.textContent = 0
    currentInput = []

})

deleteLastDigit.addEventListener('click', () => {

    if (currentInput.length === 1) {
        currentInput.pop()
        display.textContent = 0
    } else {
        currentInput.pop()
        updateDisplay()
    }

})

addition.addEventListener('click', () => {
    currentInput.push('+')
    updateDisplay();
})

subtraction.addEventListener('click', () => {
    currentInput.push('-')
    updateDisplay();
})

multiplication.addEventListener('click', () => {
    currentInput.push('*')
    updateDisplay();
})

division.addEventListener('click', () => {
    currentInput.push('/')
    updateDisplay();
})

equal.addEventListener('click', () => {

    // let outputString = currentInput.join('')
    // currentInput = outputString.split(/(\+|-|\*|\/)/);
    // display.textContent = operate(parseFloat(currentInput[0]), currentInput[1], parseFloat(currentInput[2]))
    stringToArray()
    console.log(currentInput)
    emptyingArray()
    console.log(currentInput)
    currentInput.push(display.textContent)
    console.log(currentInput)

})

function emptyingArray() {
    currentInput = []
}

function stringToArray() {

    let outputString = currentInput.join('')
    currentInput = outputString.split(/(\+|-|\*|\/)/);
    display.textContent = operate(parseFloat(currentInput[0]), currentInput[1], parseFloat(currentInput[2]))
}

