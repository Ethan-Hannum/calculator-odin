let num1;
let num2;
let operator;

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(numer, denom) {
    return numer / denom;
};

function operate(op, num1, num2) {
    if (op === "+") {
        add(num1, num2);
    } else if (op === "-") {
        subtract(num1, num2);
    } else if (op === "*") {
        multiply(num1, num2);
    } else if (op === "/") {
        divide(num1, num2);
    }
};