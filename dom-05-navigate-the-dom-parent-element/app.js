// parentElement

const heading = document.querySelector('h2');
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement); // can chain to go further up toward the root
console.log(heading.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement.parentElement);
console.log(
	heading.parentElement.parentElement.parentElement.parentElement
		.parentElement
); // end of the line, will return null

const parent = heading.parentElement;
parent.style.color = 'red';
