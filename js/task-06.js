const inputEl = document.querySelector("#validation-input");

const hadleInputOnBlur = event => {
	const inputData = event.target.value.length;
	const validationCheck = Number(event.target.dataset.length);
	event.target.classList.toggle("valid", inputData === validationCheck);
	event.target.classList.toggle("invalid", inputData !== validationCheck);
};

inputEl.addEventListener("blur", hadleInputOnBlur);
