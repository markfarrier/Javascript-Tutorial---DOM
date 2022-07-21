// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result'); // needs to use # for id, and . for class, so it can distinguish what is being requested
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

console.log('for loop below');
list.forEach(function (item) {
	console.log(item);
	item.style.color = 'yellow';
});
