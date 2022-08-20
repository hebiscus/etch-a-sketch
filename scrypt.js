
for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add('gridElement');
    document.getElementById("gridContainer").appendChild(gridElement);
}

const gridElement = document.getElementsByClassName("gridElement")

document.querySelectorAll('.gridElement').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'salmon';
    });
  });

let gridSize = document.querySelector("input");
let gridValue = document.querySelector("label");

gridValue.textContent = gridSize.value + " " + "x " + gridSize.value;

gridSize.addEventListener("input", function () {
    gridValue.textContent = gridSize.value + " " + "x " + gridSize.value;
});

gridSize.addEventListener("input", function () {
    const gridContainer = document.getElementById("gridContainer");
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }
    for (let i = 0; i < gridSize.value; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add('gridElement');
        document.getElementById("gridContainer").appendChild(gridElement);
    }
});