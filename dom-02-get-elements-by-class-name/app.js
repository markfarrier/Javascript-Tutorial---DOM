// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// node-list = array-like object
// can use index & length property but not array methods

const listItems = document.getElementsByClassName('special');

console.log(listItems);

listItems[1].style.color = 'blue';

console.log(listItems);
