const form = document.querySelector(".login-form");

const handleFormSubmit = event => {
	event.preventDefault();

	const formData = {
		email: event.currentTarget.elements.email.value,
		password: event.currentTarget.elements.password.value,
	};

	if (formData.email === "" || formData.password === "") {
		alert("Please fill in all the fields!");
	} else {
		console.log(formData);
		event.currentTarget.reset();
	}
};

form.addEventListener("submit", handleFormSubmit);
