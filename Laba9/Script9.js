const signs = ['+', '-', '*', '/'];
const clearSign = 'C';
const removeSign = '<-';
const equalSign = '=';
const dotSign = '.';

const btnsContainer = document.querySelector('.calculatorBtns');
const input = document.querySelector('.calculatorInput input');

btnsContainer.addEventListener('click', (event) => {
    const target = event.target;
    const currentValue = input.value;

    if (target.classList.contains('calculatorBtn')) {
        const symbol = target.textContent;

        if (hasInvalidSymbols(currentValue)) {
            input.value = '';
        } else {
            processInput(currentValue, symbol);
        }
    }
});

function hasInvalidSymbols(value) {
    return !((value).match(/[0-9%\/*\-+=.]/) || value === '');
}

function processInput(currentValue, symbol) {
    if (symbol === equalSign) {
        handleEqual(currentValue);
    } else if (symbol === removeSign) {
        input.value = currentValue.slice(0, -1);
    } else if (symbol === clearSign) {
        input.value = '';
    } else if (symbol === dotSign) {
        handleDot(currentValue);
    } else {
        if (signs.includes(symbol)) {
            handleSign(currentValue, symbol);
        } else {
            input.value += symbol;
        }
    }
}

function handleEqual(currentValue) {
    let valueToCalculate = currentValue;
    
    if (isLastSymbolSign(valueToCalculate) || isLastSymbolDot(valueToCalculate)) {
        valueToCalculate = valueToCalculate.slice(0, -1);
    }
    
    try {
        input.value = eval(valueToCalculate);
    } catch {
        input.value = 'Error';
    }
}

function handleSign(currentValue, symbol) {
    if (currentValue === '' && symbol !== '-') {
        return;
    }
    
    if (isLastSymbolSign(currentValue) || isLastSymbolDot(currentValue)) {
        input.value = currentValue.slice(0, -1) + symbol;
    } else {
        input.value += symbol;
    }
}

function handleDot(currentValue) {
    if (isLastSymbolSign(currentValue) || currentValue === '') {
        return;
    }
    
    const parts = currentValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes(dotSign)) {
        input.value += dotSign;
    }
}

function isLastSymbolSign(value) {
    return signs.includes(value.slice(-1));
}

function isLastSymbolDot(value) {
    return value.slice(-1) === dotSign;
}