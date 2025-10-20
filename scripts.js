const display = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn")
let target;

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

// Operation functions will set num1 to given operation and set num2 to null

function add(x, y) { 
    calculate.num1 = x + y;
    calculate.num2 = null;
    return x + y;
};

function subtract(x, y) {
    calculate.num1 = x - y;
    calculate.num2 = null;
    return x - y;
};

function multiply(x, y) {
    calculate.num1 = x * y;
    calculate.num2 = null;
    return x * y;
};

function divide(numer, denom) {
    calculate.num1 = numer / denom;
    calculate.num2 = null;
    return numer / denom;
};

// Finds which operation to run then displays result.
function operate(op, num1, num2) {
    if (op === "+") {
        display.textContent = add(num1, num2);
    } else if (op === "-") {
        display.textContent = subtract(num1, num2);
    } else if (op === "*") {
        display.textContent = multiply(num1, num2);
    } else if (op === "/") {
        display.textContent = divide(num1, num2);
    }
};

/* If clicked btn is op, then run assignNum. First with num in display to set
 calculate.numX, and run operate if possible. Then set operator.*/
// Else add clicked num btn to display.textContent
function newText(text) {
    const opsigns = "+-*/=";
    if (opsigns.includes(text)) {
        assignNum(display.textContent);
        assignNum(text);
    } else {
        display.textContent = `${display.textContent}${text}`;
        opBtns.forEach((button) => {
            button.addEventListener("click", getClick);
        })
    }
}


function assignNum(displayText) {
    const opsigns = "+-*/=";
    /* Used when running assignNum(text), sets calculator.operator to the op btn
    that was clicked if said btn wasn't equals. Sets .result to true*/
    if (opsigns.includes(displayText)) {
        if (calculate.operator === null) {
            if (displayText !== "=") {
                calculate.operator = displayText;
                opBtns.forEach((button) => {
                    button.removeEventListener("click", getClick);
                })
            }
            calculate["result"] = true;
            console.log(`calculate.operator is ${calculate.operator}`);
        }
    // when op-btn is pressed take the display.textContent and do following:
    } else {
        /* If num1 is null: Set num1 to display.textContent and make sure that 
        number is displayed. Set .result to true */
        if (calculate.num1 === null) {
            calculate.num1 = +displayText;
            display.textContent = displayText;
            calculate["result"] = true;
            console.log(`num1 is ${calculate.num1}`);
        /* If num2 is null: Set num2 to display.textContent and make sure that 
        number is displayed. Set .result to true */
        } else if (calculate.num2 === null) {
            calculate.num2 = +displayText;
            display.textContent = displayText;
            calculate["result"] = true;
            console.log(`num2 is ${calculate.num2}`);
        }
    }

    /* Only ran if both num1 and num2 are not null. Should only run
    if assignNum(display.textContent) is called since num2 will be removed when
    if statement is ran.*/
    if ((calculate.num1 !== null) && (calculate.num2 !== null)) {
        operate(calculate.operator, calculate.num1, calculate.num2);
        calculate["result"] = true;
        calculate.operator = null;
        /* Lets a new calculation begin, with result from = press will be stored
        as num1 when new operator is pressed. Unless used clicks new number */
        if (target.id === "equal") {
            calculate.num1 = null;
        }
    }
}

function getClick(e) {
    const recentClick = e.target.textContent;
    const opsigns = "+-*/=";

    /* If calculate.result exists check if target.id is not equal to equal. If
    so empty display.*/
    if ("result" in calculate) {
        if (target.id !== "equal") {
            display.textContent = "";
        }
        delete calculate.result;
        target.classList.remove("highlighted-op");
    }

    // Set target to op-btn that was clicked, if clicked. Add highlight unless =
    if (opsigns.includes(recentClick)) {
        target = document.getElementById(`${e.target.id}`);
        console.log(target);
        if (target.id !== "equal") target.classList.add("highlighted-op");
    }
    // If C is clicked, clear display and reset numbers to null,
    // If any other button is clicked call newText(recentClick)
    if (recentClick === "C") {
        display.textContent = ``;
        calculate.num1 = null;
        calculate.num2 = null;
        calculate.operator = null;
        delete calculate.result;
        opBtns.forEach((button) => button.classList.remove("highlighted-op"));
    } else {
        newText(recentClick);
    }
}