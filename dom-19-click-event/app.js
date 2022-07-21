// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
	// btn is what causes the event (on click)
	// console.log('hey you clicked me');
	heading.classList.add('red'); // heading is what is affected
});
