function generateRandomHex() {
  const hexChars = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexCode += hexChars[randomIndex];
  }

  return hexCode;
}

function updateColor() {
  const colorDisplay = document.getElementById("color-display");
  const randomHex = generateRandomHex();
  colorDisplay.textContent = randomHex;
  document.body.style.backgroundColor = randomHex;
}

const changeColorButton = document.getElementById("change-color-button");
changeColorButton.addEventListener("click", updateColor);

updateColor();


 