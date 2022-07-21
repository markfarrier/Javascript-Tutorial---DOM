// prepend
// innerText

const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`; // places text content within the h2 element
document.body.prepend(heading); // inserts at the start of the body rather than at the end (like append would)
