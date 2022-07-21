// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	// console.log('target', e.target);
	// if (e.target.classList.contains('link')) {
	// console.log('you clicked on the link');
	// }
}
function stopPropagation(e) {
	console.log('you clicked on list');
	e.stopPropagation();
}

// if capture: true is not added, list (clicked element) will be first, then parent elements
// list.addEventListener('click', showBubbling);
// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

// stops event propogation in its tracks
// having this and previous uncommented will only log the clicked element
// list.addEventListener('click', stopPropagation);

// if capture: true is added, the root will be first, then children elements
list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
