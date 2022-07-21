// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div'); // created but doesn't exist within the created div yet, and the body div doesn't exist yet within the body

bodyDiv.appendChild(text); // adds the text above to the created div
document.body.appendChild(bodyDiv); // adds the created div to the body of the html - gets added to the very end

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading); // adds heading within original div with id "result", which exists before the simple body div created earlier.  It will add it to the end of this div, therefore it will be in the middle (in between the initial original div element, and the element of the later-created div which exists below original div)

console.log(result.children);
