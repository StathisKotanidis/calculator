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

    let displayValue = currentInput.join('')
    display.textContent = displayValue
}

zero.addEventListener('click', () => {
    currentInput.push(0)
    updateDisplay()
});

one.addEventListener('click', () => {
    currentInput.push(1)
    updateDisplay()
});

two.addEventListener('click', () => {
    currentInput.push(2)
    updateDisplay()
});

three.addEventListener('click', () => {
    currentInput.push(3)
    updateDisplay()
})

four.addEventListener('click', () => {
    currentInput.push(4)
    updateDisplay()
})

five.addEventListener('click', () => {
    currentInput.push(5)
    updateDisplay()
});

six.addEventListener('click', () => {
    currentInput.push(6)
    updateDisplay()
});

seven.addEventListener('click', () => {
    currentInput.push(7)
    updateDisplay()
})

eight.addEventListener('click', () => {
    currentInput.push(8)
    updateDisplay()
})

nine.addEventListener('click', () => {
    currentInput.push(9)
    updateDisplay()
})

clear.addEventListener('click', () => {

    display.textContent = 0
    currentInput = []

})

deleteLastDigit.addEventListener('click', () => {

    currentInput = stringToArrayv2()
    if (currentInput.length === 1) {
        currentInput.pop()
        display.textContent = 0
    } else {
        currentInput.pop()
        updateDisplay()
    }

})

addition.addEventListener('click', () => {
    if (currentInput.length > 0 && display.textContent !== '0') {
        currentInput.push('+');
        updateDisplay();
    }
});

subtraction.addEventListener('click', () => {
    if (currentInput.length > 0 && display.textContent !== '0') {
        currentInput.push('-');
        updateDisplay();
    }
});

multiplication.addEventListener('click', () => {
    if (currentInput.length > 0 && display.textContent !== '0') {
        currentInput.push('*');
        updateDisplay();
    }
});

division.addEventListener('click', () => {
    if (currentInput.length > 0 && display.textContent !== '0') {
        currentInput.push('/');
        updateDisplay();
    }
});

equal.addEventListener('click', () => {

    if (currentInput.length > 0 && display.textContent !== '0') {
        stringToArray();
        emptyingArray();
        currentInput.push(display.textContent);
    }

});

function emptyingArray() {

    currentInput = []
}

function stringToArray() {

    let outputString = currentInput.join('')
    currentInput = outputString.split(/(\+|-|\*|\/)/);
    display.textContent = operate(parseFloat(currentInput[0]), currentInput[1], parseFloat(currentInput[2]))
}

function stringToArrayv2() {

    return display.textContent.split('');

    /*  
    i made this function to fix 2 buggs i had. The first one was that was when i tried to use the
    delete button on an output it returned 0, eg i have 25*2=50. So my output is 50 and if i used
    the delete button i should  had got 5 in my screen instead i was getting 0. This function
    converts a string to array , eg "50" --> ['5','0'] and then i assigned this value at my 
    currentInput value in my deleteLastDigit event listener.

    The second bug it fixed it was that whenever i had 0 in my screen and  i pressed delete
    button the 0 was removed and i had an empty screen which i didnt want.
    Tha makes the screen look immutable when there is already a 0 on it.
    */
}


