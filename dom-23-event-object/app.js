// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', (event) => {
	// heading.classList.add('blue');

	console.log(event.currentTarget); // event.currentTarget is heading in this case
	console.log(this); // if arrow function is used, "this" won't return event.currentTarget
});

btn.addEventListener('click', function (event) {
	event.currentTarget.classList.add('blue'); // event.currentTarget is btn in this case
	console.log(event.type); // returns click
});

function someFunc(e) {
	e.preventDefault(); // in this case, stops the default behavior of click events, such as <a href>
}

link.addEventListener('click', someFunc);
