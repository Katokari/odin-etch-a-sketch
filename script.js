const container = document.querySelector(".container");

const changeSquareBackground = (e) => {
    const square = e.target;
    square.classList.add("hovered");
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", changeSquareBackground)
        container.appendChild(square);
    }
}

