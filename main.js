const canvas = document.querySelector(".canvas");

let pixelSize = canvas.clientWidth;
let mouseHeld = false;

document.addEventListener("mousedown", (event) => {
    event.preventDefault();
    mouseHeld = true;
});
document.addEventListener("mouseup", () => {
    mouseHeld = false;
});


function drawCanvas(resolution) {
    for (i = 0; i < resolution * resolution; i++) {
        let grid = document.createElement("div");
        grid.classList.add("pixel-grid");
        grid.setAttribute("style", `width: ${pixelSize / resolution}px; height: ${pixelSize / resolution}px;`);
        grid.addEventListener("mouseover", () => {
            if (mouseHeld) {
                grid.style.backgroundColor = "black";
            }
        });

        grid.addEventListener("mousedown", () => {
                grid.style.backgroundColor = "black";
        });
       
        canvas.appendChild(grid);
    };

};

drawCanvas(prompt(Number))
