/*Number of categories*/
const categoriesEl = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesEl.length}`);

/*Animals list*/
const animalsTitleEl = document.querySelector("#categories").firstElementChild.querySelector("h2");

const animalsListEl = document.querySelector("#categories").firstElementChild.querySelectorAll("li");
console.log(`Category: ${animalsTitleEl.textContent}
Elements: ${animalsListEl.length}`);

/*Products list*/
const productsTitleEl = document.querySelector("#categories").firstElementChild.nextElementSibling.querySelector("h2");

const productsListEl = document
	.querySelector("#categories")
	.firstElementChild.nextElementSibling.querySelectorAll("li");
console.log(`Category: ${productsTitleEl.textContent}
Elements: ${productsListEl.length}`);

/*Technologies list*/
const technologiesTitleEl = document.querySelector("#categories").lastElementChild.querySelector("h2");

const technologiesListEl = document.querySelector("#categories").lastElementChild.querySelectorAll("li");
console.log(`Category: ${technologiesTitleEl.textContent}
Elements: ${technologiesListEl.length}`);
