let counterValue = 0;

const counter = {
	incrementBtn: document.querySelector('[data-action="increment"]'),
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	counterValueEl: document.querySelector("#value"),
};

const handleIncrementBtnClick = () => {
	counterValue += 1;
	counter.counterValueEl.textContent = counterValue;
};

const handleDecrementBtnClick = () => {
	counterValue -= 1;
	counter.counterValueEl.textContent = counterValue;
};

counter.incrementBtn.addEventListener("click", handleIncrementBtnClick);
counter.decrementBtn.addEventListener("click", handleDecrementBtnClick);
