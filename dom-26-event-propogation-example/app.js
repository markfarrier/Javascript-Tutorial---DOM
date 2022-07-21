// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello() {
	console.log('hello there');
}

// use button to add heading element dynamically
btn.addEventListener('click', function () {
	const element = document.createElement('h1');
	element.classList.add('heading');
	element.textContent = `i'm inside container`;
	container.appendChild(element);
});
container.addEventListener('click', function (e) {
	if (e.target.classList.contains('heading')) {
		console.log('hello');
	}
});

// below does not work if headings are added dynamically.  Instead, target the parent element using the above code, as the container exists at the inception of the page.  Because even though elements with .heading class exist after added via the button, these elements do not exist within the const heading created at the top of the javascript file, as there was initially no headings to find (whereas the container of the heading did exist)
// heading.addEventListener('click', sayHello);
