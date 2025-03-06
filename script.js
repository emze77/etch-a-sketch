let amount = 16;
let lineToggle = false;
let boxWidth;
let allBoxes;

const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");
const clearBtn = document.querySelector("#clearBtn");


// doesn't work until now. How can it change automaticly?
// document.querySelector("#inputAmount").addEventListener('input', () => {
//     let amount = document.querySelector("#inputAmount").value;
//     console.log(amount);
// });


createBoard();


function createBoard () {
    boxWidth = 480 / amount;
    let boxesAltogehter = amount * amount;
    for (i = 1; i <= boxesAltogehter; i++) {
        createBox(i);
        addChessboardClasses(i);
    }
    allBoxes = document.querySelectorAll(".box");
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
    if ((number - 1) % amount === 0) {lineToggle = !lineToggle};
    switch(true) {
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

allBoxes.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        const target = e.target;
        // target.classList.add("paint");
        target.style.backgroundColor = "red";
    })
})

clearBtn.addEventListener('click', () => {
    allBoxes.forEach(item => {
        item.style.backgroundColor = "";})
    });



sizeBtn.addEventListener('click', () => {
    amount = window.prompt("Choose board size:", "16");
    createBoard();
})