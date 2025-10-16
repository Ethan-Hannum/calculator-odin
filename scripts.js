const display = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn")

numBtns.forEach((button) => {
    button.addEventListener("click", getClick);
});

opBtns.forEach((button) => {
    button.addEventListener("click", getClick);
})

const calculate = {
    num1: null,
    num2: null,
    operator: null,
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
    const opsigns = "+-*/=";
    if (opsigns.includes(text)) {
        display.textContent = `${text}`
    } else {
        display.textContent = `${display.textContent}${text}`;
    }
};

function getClick(e) {
    const recentClick = e.target.textContent;
    // If C is clicked, clear display and reset numbers to null
    if (recentClick === "C") {
        display.textContent = ``;
        calculate.num1 = null;
        calculate.num2 = null;
        calculate.operator = null;
    } else {
        newText(recentClick);
    }
}