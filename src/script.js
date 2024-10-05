//Beta and Ivan

var EMPTY = '0';
var OPERATORS = "+-*/";
var MAXLEN = 9;
var calculator = {
    getHistory: function () {
        var _a;
        return (_a = document.querySelector('.history')) === null || _a === void 0 ? void 0 : _a.textContent;
    },
    setHistory: function (val) {
        var e = document.querySelector('.history');
        if (e)
            e.textContent = val; // an object reference implicitly evaluates to true in a boolean context if it is not declared as null or undefined.
    },
    isHistoryEmpty: function () {
        return this.getHistory() === EMPTY;
    },
    getOutput: function () {
        var _a;
        return (_a = document.querySelector('.output')) === null || _a === void 0 ? void 0 : _a.textContent;
    },
    setOutput: function (val) {
        var e = document.querySelector('.output');
        if (e != null)
            e.textContent = val;
    },
    isOutputEmpty: function () {
        return this.getOutput() === EMPTY;
    }
};

function isLastCharacterOperator() {
    var history = calculator.getHistory();
    if (history && OPERATORS.indexOf(history.charAt(history.length - 1)) !== -1)
        return true;
    else
        return false;
}

function isLastCharacterDot(){
    var history = calculator.getHistory();
    if (history && history.charAt(history.length - 1) === '.')
        return true;
    else
        return false;
}

function clearHistory() {
    calculator.setHistory(EMPTY);
}

function clearOutput() {
    calculator.setOutput(EMPTY);
}

function clearAll() {
    clearHistory();
    clearOutput();
}

function addDigit(val) {
    if (calculator.isHistoryEmpty() && calculator.isOutputEmpty()) {
        calculator.setHistory(val);
        calculator.setOutput(val);
    }
    else if (!calculator.isHistoryEmpty() && calculator.isOutputEmpty()) {
        if (isLastCharacterOperator()) {
            calculator.setHistory(calculator.getHistory() + val);
        }
        else if (isLastCharacterDot()) {
            calculator.setHistory(calculator.getHistory().slice(0, -1) + val);
        }
        else {
            calculator.setHistory(val);
        }
        calculator.setOutput(val);
    }
    else if (isLastCharacterDot()) {
        calculator.setHistory(calculator.getHistory().slice(0, -1) + val);
    }
    else {
        var output = calculator.getOutput();
        if (output && output.length < MAXLEN) {
            calculator.setHistory(calculator.getHistory() + val);
            calculator.setOutput(calculator.getOutput() + val);
        }
    }
}

function addOperator(sign) {
    calculate();
    var history = calculator.getHistory();
    // if operator is the last character in history, replace it by the previously clicked number/operator
    if (history && isLastCharacterOperator())
        calculator.setHistory(history.slice(0, -1) + sign);
    else
        calculator.setHistory(history + sign);
}
function calculate() {
    var history = calculator.getHistory();
    try {
        if (history) {
if (isLastCharacterOperator())
                calculator.setHistory(eval(history.slice(0, -1)));
            else {
                calculator.setHistory(eval(history));
            }
        }
        clearOutput();
    }
    catch (error) {
        alert('Invalid Input!');
        clearAll();
    }
}

function backspace() {
    var history = calculator.getHistory();
    var output = calculator.getOutput();
    if (history && output && !calculator.isOutputEmpty()) {
        if (history.length === 1 && output.length === 1) {
            clearAll();
        }
        else if (history.length > 1 && output.length === 1) {
            calculator.setHistory(history.substring(0, history.length - 1));
            clearOutput();
        }
        else {
            calculator.setHistory(history.substring(0, history.length - 1));
            calculator.setOutput(output.substring(0, output.length - 1));
        }
    }
}

clearAll();
