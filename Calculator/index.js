let input = '0';
let output = '';

function updateDisplay() {
    document.getElementById('input').textContent = input;
    document.getElementById('output').textContent = output;
}

function appendToResult(value) {
    if (input === '0' && value !== '.' && value !== '(' && value !== ')') {
        input = '';
    }
    input += value;
    updateDisplay();
}

function clearLastEntered() {
    input = input.slice(0, -1);
    updateDisplay();
}

function clearResult() {
    input = '0';
    output = '';
    updateDisplay();
}

function toggleSign() {
    input = parseFloat(input) * -1 + '';
    updateDisplay();
}

function calculate() {
    try {
        output = eval(input);
        input = output + '';
        updateDisplay();
    } catch (error) {
        output = 'Error';
        input = '0';
        updateDisplay();
    }
}
