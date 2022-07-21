// JSON.stringify(), JSON.parse

const friends = ['john', 'peter', 'bob'];
// localStorage.setItem('friends', friends);
// const values = localStorage.getItem('friends'); // setItem above stores the friends array as a comma-separated string, rather than an array
// console.log(values[0]); // therefore this will return 'j' rather than 'john'

localStorage.setItem('friends', JSON.stringify(friends));
// const values = localStorage.getItem('friends'); // will still retrieve a string
const values = JSON.parse(localStorage.getItem('friends')); // if parsed, it will convert retrieved JSON string into an array
console.log(values[0]);

// console.log(values[2]);

let fruits;

if (localStorage.getItem('fruits')) {
	// if fruits exists
	fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
	// if no fruits
	fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
