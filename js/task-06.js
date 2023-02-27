const inputEl = document.querySelector("#validation-input");

const hadleInputOnBlur = event => {
	if (inputEl.value.length === Number(inputEl.dataset.length)) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else {
		inputEl.classList.add("invalid");
		inputEl.classList.remove("valid");
	}
};

inputEl.addEventListener("blur", hadleInputOnBlur);
