let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendParenthesis(parenthesis) {
    display.value += parenthesis;
}

function toggleSign() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = String(-currentValue);
    } else if (display.value !== "") {
        display.value = "";
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = new Function('return ' + display.value)();
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
        console.error("Calculation Error:", error);
    }
}