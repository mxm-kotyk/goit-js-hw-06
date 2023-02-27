const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeFontSizeOnInput = event => {
	textEl.style.fontSize = `${event.target.value}px`;
};

sliderEl.addEventListener("input", changeFontSizeOnInput);
