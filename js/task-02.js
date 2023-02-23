const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

/*Solution*/

const makeIngredientsItems = ingredientsList => {
	return ingredientsList.map(ingredient => {
		const ingredientItem = document.createElement("li");
		ingredientItem.textContent = `${ingredient}`;
		ingredientItem.classList.add("item");
		return ingredientItem;
	});
};

const ingredientsItems = makeIngredientsItems(ingredients);
const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...ingredientsItems);
