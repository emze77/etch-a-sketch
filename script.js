let amount = 16;
let lineToggle = false;
let boxWidth;
let allBoxes;
let boxesAltogehter;

const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");
const clearBtn = document.querySelector("#clearBtn");


createBoard();


function createBoard() {
    boxWidth = 480 / amount;
    boxesAltogehter = amount * amount;
    for (i = 1; i <= boxesAltogehter; i++) {
        createBox(i);
        addChessboardClasses(i);
    }
    allBoxes = document.querySelectorAll(".box");
    enablePainting()
}

function createBox(number) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("id", `box${number}`);
    box.style.cssText = `width: ${boxWidth}px; height: ${boxWidth}px`;
    container.appendChild(box);
    return;
}

function addChessboardClasses(number) {
    const thisBox = document.querySelector(`#box${number}`);
    if ((number - 1) % amount === 0) { lineToggle = !lineToggle };
    switch (true) {
        case (lineToggle === true && number % 2 === 1):
        case (lineToggle === false && number % 2 === 0):
            thisBox.classList.add("bgColor1");
            break;
        case (lineToggle === true && number % 2 === 0):
        case (lineToggle === false && number % 2 === 1):
            thisBox.classList.add("bgColor2");
            break;
    }
    return;
}

function deleteBoard() {
    for (i = 1; i <= boxesAltogehter; i++) {
        document.querySelector(".box").remove();
    }
}

function enablePainting() {
    allBoxes.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            const target = e.target;
            let alpha = alphaMinus1(target);
            let rgbArrayUse = randomizeRgb();
            target.style.backgroundColor = 
                `rgba(${rgbArrayUse[0]}, ${rgbArrayUse[1]}, ${rgbArrayUse[2]}, 0.${alpha})`;
            })
})}

function alphaMinus1 (target) {
    let targetRgba = target.style["background-color"];
    let alpha;
    if (targetRgba.charAt(3) === "a") {
        alpha = targetRgba.at(-2);
        alpha--;
    } else {
        alpha = 9;
    }
    return alpha;
}


function randomizeRgb() {
    let rgbArray = [];
    for (i = 0; i < 3; i++) {
        rgbArray.push(parseInt(Math.floor(Math.random() * 255)));
    }
    return rgbArray;
}

function checkValidation() {
    if (amount < 0 || amount > 100) {
        amount = parseInt(window.prompt("Invalid Number! Choose Board size between 1 and 100:", "16"));
        checkValidation();
    } else if (isNaN(amount)) {
        amount = parseInt(window.prompt("Input is not a number! Choose Board size between 1 and 100:"), "16");
        checkValidation();
    } else {
        return;
    }
}

clearBtn.addEventListener('click', () => {
    allBoxes.forEach(item => {
        item.style.backgroundColor = "";
    })
});

sizeBtn.addEventListener('click', () => {
    amount = parseInt(window.prompt("Choose Board size between 1 and 100:", "16"));
    checkValidation();
    deleteBoard();
    createBoard();
})



