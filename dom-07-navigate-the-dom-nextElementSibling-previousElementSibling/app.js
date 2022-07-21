// previousElementSibling
// nextElementSibling

const first = document.querySelector('.first');
console.log(first.nextElementSibling); // unsure why the color is already set on this, even though the color is set on the next line rather than before
first.nextElementSibling.style.color = 'red';

const last = document.querySelector('#last');
