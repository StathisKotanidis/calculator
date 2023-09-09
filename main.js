let numbers = document.querySelectorAll('.numbers')
let screen = document.querySelector('.screen')
let operators = document.querySelectorAll('.operator')
let deleteLastCharacter = document.querySelector('#delete')
let clear = document.querySelector('#clear')
let equal = document.querySelector('#equal')

let currentInput = ''

numbers.forEach((number) => number.addEventListener('click', event => {

    currentInput += event.target.textContent
    updateDisplay()
}))

operators.forEach((operator) => operator.addEventListener('click', event => {

    currentInput += event.target.textContent
    updateDisplay()
}))

clear.addEventListener('click', () => {

    currentInput = ''
    screen.textContent = 0
})

deleteLastCharacter.addEventListener('click', () => {

    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1)
    } else {
        currentInput = 0
    }
    updateDisplay()
})

equal.addEventListener('click', () => {

    currentInput = splitingInput()
    updateDisplay()

})

function updateDisplay() {

    screen.textContent = currentInput //string
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

    let arrayForOperate = currentInput.split(/(＋|－|\×|÷)/);
    let result = operate(parseFloat(arrayForOperate[0]), arrayForOperate[1], parseFloat(arrayForOperate[2]))

    if (result === Math.floor(result)) {
        return result.toString(); // Convert to string without decimal places
    } else {
        return result.toFixed(2); // Limit to two decimal places for floating-point numbers
    }
}





