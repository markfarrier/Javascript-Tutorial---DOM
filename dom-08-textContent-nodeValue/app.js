// nodeValue
// textContent

const item = document.getElementById('special');

// const value = item.nodeValue;
// console.log(value); // returns null

console.log(item.childNodes);

const value = item.firstChild.nodeValue;
console.log(value);

const easyValue = item.textContent;

console.log(easyValue);
