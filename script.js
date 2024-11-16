const container = document.querySelector(".container");
const btn = document.querySelector("#enter");
const size = document.querySelector("#size");
const err = document.querySelector("#error");

const changeSquareBackground = (e) => {
    const square = e.target;
    square.classList.add("hovered");
}

const drawGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", changeSquareBackground)
            const size = 100 / gridSize; 
            square.style.width = size + "%";
            square.style.height = size + "%";
            container.appendChild(square);
        }
    }    
}

let gridSize = 16;
drawGrid(gridSize);

btn.addEventListener("click", () => {
    if (isNaN(size.value) || size.value > 100 || size.value < 16) err.textContent = "INVALID VALUE PLEASE TRY AGAIN!";
    else {
        container.innerHTML = "";
        gridSize = size.value;
        drawGrid(gridSize);
        err.textContent = "";
    }
});



