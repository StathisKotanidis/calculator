let numbers = document.querySelectorAll('.numbers')
let screen = document.querySelector('.screen')
let operators = document.querySelectorAll('.operator')
let deleteLastCharacter = document.querySelector('#delete')
let clear = document.querySelector('#clear')
let equal = document.querySelector('#equal')
let dot = document.querySelector('#dot')

let overallInput = ''
let currentNumber = ''

numbers.forEach((number) => number.addEventListener('click', event => {

    currentNumber += event.target.textContent
    updateDisplay()
}))

operators.forEach((operator) => operator.addEventListener('click', event => {

    overallInput += currentNumber;
    currentNumber = ''
    overallInput += event.target.textContent
    updateDisplay()
}))

clear.addEventListener('click', () => {

    overallInput = ''
    currentNumber = ''
    screen.textContent = 0
})

deleteLastCharacter.addEventListener('click', () => {

    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
    } else if (overallInput.length > 0) {
        overallInput = overallInput.slice(0, -1);
    }

    if (overallInput.length === 0 && currentNumber.length === 0) {
        currentNumber = '0'
    }

    updateDisplay()
});

equal.addEventListener('click', () => {

    overallInput += currentNumber;
    currentNumber = ''
    overallInput = splitingInput()
    updateDisplay()
})

dot.addEventListener('click', () => {

    if (!currentNumber.includes(".")) {
        currentNumber += "."
        updateDisplay()
    }
})

function updateDisplay() {

    screen.textContent = overallInput + currentNumber
}

function operate(a, operator, b) {

    if (operator == '＋') {
        return a + b
    } else if (operator == '－') {
        return (a - b)
    } else if (operator == "×") {
        return (a * b)
    } else if (operator == '÷') {
        return (a / b)
    } else {
        console.log('Error')
    }
}

function splitingInput() {

    let arrayForOperate = overallInput.split(/(＋|－|×|÷)/)
    let result = operate(parseFloat(arrayForOperate[0]), arrayForOperate[1], parseFloat(arrayForOperate[2]))

    if (result === Math.floor(result)) {
        return result.toString()
    } else {
        return result.toFixed(2)
    }
}
