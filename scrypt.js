
for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add('gridElement');
    document.getElementById("gridContainer").appendChild(gridElement);
}

const gridElement = document.getElementsByClassName("gridElement")

document.getElementById("gridContainer").addEventListener("mouseover", function changeColor(event){
    event.target.style.backgroundColor = 'salmon';
});

const gridSize = document.getElementById("gridSize");
const gridValue = document.getElementById("gridSize").value;

// gridSize.addEventListener("input", function(){
//     document.getElementById("sizeLabel").textContent = `${gridValue}` + " " "x" + " " + `${gridValue}`;
// });