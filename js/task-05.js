const refs = {
	inputEl: document.querySelector("#name-input"),
	outputEl: document.querySelector("#name-output"),
};

const handleInputChange = event => {
	if (event.target.value !== "") {
		refs.outputEl.textContent = event.target.value;
	} else {
		refs.outputEl.textContent = "Anonymous";
	}
};

refs.inputEl.addEventListener("input", handleInputChange);
