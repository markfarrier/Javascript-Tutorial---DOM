// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);

second.className = 'colors'; // will apply colors class styles
second.className = 'text'; // will apply text class styles, but override colors class set in previous line

second.className = 'colors text'; // will apply colors AND text classes to second element, spacing the text, making it larger, and adding background + changing text color

// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors'); // shorthand for doing multiple adds
third.classList.remove('text'); // removes the text class from list

let result = third.classList.contains('colors');
// let result = third.classList.contains('text');
if (result) {
	console.log('hello world');
} else {
	console.log('does not have the class');
}

const classValue3 = third.classList; // contains a collection of classes indexed at 0, a length property, and value (containing all the classes separated by a space, as it would be in the html)
console.log(classValue3);
