function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

/* Solution */

const changeColorBtn = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

const handleColorChangeOnClick = event => {
	document.body.style.background = getRandomHexColor();
	colorDisplay.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener("click", handleColorChangeOnClick);
