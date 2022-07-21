// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent); // returns the text content within the div (with id 'second')
console.log(list.innerHTML); // will return the whole html structure within the unordered list container.  So in this case will include the list tags + classes etc
console.log(list.textContent); // only returns the text content within the unordered list container.  So will not include the <li> tags

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
document.body.appendChild(ul); // adds the newly created unordered list to the end of the body of the html

div.textContent = 'hello world';
div.innerHTML = 'hello people';

div.innerHTML = `<li class="item">${randomVar}</li>
  <li>list item</li> <li>list item</li>`; // will work and the html will use the tags inserted

div.textContent = `<li class="item">${randomVar}</li>
  <li>list item</li> <li>list item</li>`; // the tags will simply appear as text on the screen rather than be used by the html
