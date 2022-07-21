// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);

// const second = first.nextSibling; // will be white space
// console.log(second); // returns text

const second = (first.nextSibling.nextSibling.style.color = 'red'); // needs to target the sibling AFTER the next sibling in order to get an actual value
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling; // again, needs to target the sibling BEFORE the previous sibling in order to get an actual value
console.log(third);
console.log(last.nextSibling.nextSibling); // if you're looking for a sibling that doesn't exist (i.e. before the end of the tree or after the end of the tree) it returns null
