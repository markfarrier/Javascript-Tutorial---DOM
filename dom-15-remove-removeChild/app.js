// remove
// removeChild

const result = document.querySelector('#result');
// result.remove(); // removes the selected result element from the dom, returned from the above query selector
// const heading = document.querySelector('h1'); // searches through all headings
const heading = result.querySelector('h1'); // only searches through headings within the result (i.e. within the returned container, which will be the first that has a result id)
console.log(heading);
result.removeChild(heading);
console.log(heading); // removes this from the html, as is reflected on the page, but will still log the value which still exists within the heading const

const heading2 = result.querySelector('h1');
console.log(heading2); // returns null
