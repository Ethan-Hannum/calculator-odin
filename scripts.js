const display = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn")

numBtns.forEach((button) => {
    button.addEventListener("click", getClick);
})

const calculate = {
    num1,
    num2,
    operator,
}

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

function newText(text) {
    display.textContent = `${text}`;
};

function getClick(e) {
    const recentClick = e.target.textContent;
    newText(recentClick);
}