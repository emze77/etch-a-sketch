let amount = 40;
let lineToggle = false;
let boxWidth;
let container = document.querySelector("#container");

function createBoard () {
    boxWidth = 480 / amount;
    let boxesAltogehter = amount * amount;
    for (i = 1; i <= boxesAltogehter; i++) {
        createBox(i);
        addChessboardClasses(i);
    }
}

function createBox(number) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("id", number);
    box.style.cssText = `width: ${boxWidth}px; height: ${boxWidth}px`;
    container.appendChild(box);
    return;
}

function addChessboardClasses(number) {
    const thisBox = document.getElementById(number);
    // const thisBox = document.querySelector(`#${number}`);

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


createBoard();