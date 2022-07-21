// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
	// full click
	console.log('you clicked me');
});
btn.addEventListener('mousedown', function () {
	// mouse press
	console.log('down');
});
btn.addEventListener('mouseup', function () {
	// mouse release
	console.log('up');
});

heading.addEventListener('mouseenter', function () {
	// hover over
	heading.classList.add('blue');
});
heading.addEventListener('mouseleave', function () {
	// finish hovering
	heading.classList.remove('blue');
});
