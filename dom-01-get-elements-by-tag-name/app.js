// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list = array-like object
// has index & length property but not array methods

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');

// cannot use below array method
// items.forEach(function (item) {
// 	console.log(item);
// });

// for (i = 0; i < items.length; i++) {
// 	console.log(items[i]);
// }

items[2].style.color = 'orange';

const betterItems = [...items];

betterItems.forEach(function (item) {
	// appears to now need to target the outerHTML property in order to get the same results as tutorial.  Code is identical, so I assume this is down to changes in javascript that may have happened since the tutorial was made.
	// console.log(item.outerHTML);
});

console.log(items);
console.log(betterItems);
