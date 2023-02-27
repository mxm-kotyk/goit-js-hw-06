function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

/* Solution */

const inputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesCollection = document.querySelector("#boxes");
boxesCollection.style.cssText = "display: flex; gap: 10px; align-items: center";

const createBoxes = amount => {
	let boxesArray = [];
	let boxSize = 30;
	amount = inputEl.value;

	for (let index = 0; index < amount; index += 1) {
		destroyBoxes();
		const box = document.createElement("div");
		box.classList.add("box");
		box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}`;

		boxSize += 10;
		boxesArray.push(box);
	}

	boxesCollection.append(...boxesArray);
};

const destroyBoxes = () => {
	document.querySelectorAll(".box").forEach(box => box.remove());
	inputEl.value = "";
};

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);
