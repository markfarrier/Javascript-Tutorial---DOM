// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
	// console.log('hello');
	let hasClass = heading.classList.contains('red'); // method that checks if class exists in heading
	if (hasClass) {
		heading.classList.remove('red'); // removes class if it already exists
	} else {
		heading.classList.add('red'); // adds class if it doesn't
	}
}

btn.addEventListener('click', changeColors);
