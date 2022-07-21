// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location');

const result = document.querySelector('#result');
const first = document.querySelector('.red');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);

// inserts the div with above text before the original div (plain text will be on top)
document.body.insertBefore(bodyDiv, result);

// result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

// inserts the newly created h2 element with "dynamic heading" contents (and blue class) above the element with "red" class, which is the h1 element within the original result div.  It will place it inside the original result div, and therefore will be in the middle (as the above inserted plain text is inserted above the original result div)
result.insertBefore(heading, first);

console.log(result.children);
