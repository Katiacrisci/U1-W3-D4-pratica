const createGrid = () => {
  const tombola = document.getElementById("tombola");
  for (let i = 0; i < 90; i++) {
    const number = document.createElement("h3");
    number.innerText = i + 1;
    number.classList.add("number");
    number.id = `${i + 1}`;
    tombola.appendChild(number);
  }
};
window.onload = () => {
  createGrid();
};
const extractNumber = () => {
  const newNumber = Math.floor(Math.random() * 90 + 1);
  const selectedNumber = document.getElementById(`${newNumber}`);
  selectedNumber.classList.add("selected");
};
const extractBtn = document.getElementById("extract-btn");
extractBtn.addEventListener("click", extractNumber);
