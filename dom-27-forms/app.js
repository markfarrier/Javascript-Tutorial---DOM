// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', function (e) {
	// e.preventDefault prevents the default behaviour of refreshing the page
	// otherwise values can't be retrieved from console
	// for some reason, this is not necessary on Google Chrome (which the tutorial uses, and displays different behavior on), but is necessary on Firefox
	e.preventDefault();
	console.log('form submitted');
	console.log(name.value);
	console.log(password.value);
});
