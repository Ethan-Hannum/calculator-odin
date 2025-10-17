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
    display.textContent = x + y
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
    if (opsigns.includes(display.textContent)) {
        display.textContent = `${text}`
    } else {
        if (opsigns.includes(text)) {
            assignNum(display.textContent);
            assignNum(text);
        } else {
            display.textContent = `${display.textContent}${text}`;
        }
    }
};

function assignNum(displayText) {
    const opsigns = "+-*/=";
    if (opsigns.includes(displayText)) {
        if (calculate.operator === null) {
            calculate.operator = displayText;
            console.log(`calculate.operator is ${calculate.operator}`);
        }
    } else {
        if (calculate.num1 === null) {
            calculate.num1 = +displayText;
            console.log(`num1 is ${calculate.num1}`);
        } else if (calculate.num2 === null) {
            calculate.num2 = +displayText;
            console.log(`num2 is ${calculate.num2}`);
        }
    }

    if ((calculate.num1 !== null) && (calculate.num2 !== null)) {
        operate(calculate.operator, calculate.num1, calculate.num2);
    }
}

function getClick(e) {
    const recentClick = e.target.textContent;
    const opsigns = "+-*/=";

    if (opsigns.includes(recentClick)) {
        const target = document.getElementById(`${e.target.id}`);
        console.log(target);
        target.classList.add("highlighted-op");
    }
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