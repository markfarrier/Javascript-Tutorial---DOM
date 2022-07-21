// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById('name');

// // only registers if a character is actually typed (e.g. won't register if it's a shift, delete, backspace, alt, control etc)
// nameInput.addEventListener('keypress', function () {
// 	console.log('you pressed a key');
// });
// // will respond to a pressing of any key, even if it doesn't type a character
// nameInput.addEventListener('keydown', function () {
// 	console.log('you pressed a key');
// });
// will respond when the key is released (even if it doesn't type a character)
nameInput.addEventListener('keyup', function () {
	console.log(nameInput.value);
});
