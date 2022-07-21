// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');

// btns.forEach((btn) => {
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		// console.log(e.currentTarget);
		// e.currentTarget.style.color = 'green'; // clicking on child/nexted button will effect parent button.  currentTarget are the elements with the ".btn" class, which is the entire button nest
		console.log('current', e.currentTarget);
		console.log('target', e.target);
		e.target.style.color = 'green'; // clicking on a child/nexted button won't effect parent button.  Target in this case is able to select a specific element, such as the elements wrapped in strong tags, rather than the entire button itself (with btn class)
	});
});
