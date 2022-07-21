// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children - does not return the white space
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren); // will include whitespaces as text nodes

const children = result.children;
console.log(children); // won't include white spaces and just return list node

// will both be whitespace
console.log(result.firstChild);
console.log(result.lastChild);
