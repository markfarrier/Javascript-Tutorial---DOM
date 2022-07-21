// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')

// session storage only stores data during session - i.e. while tab is still open
// local storage stores data between opening and closing of browser

localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// localStorage.setItem('name', 'peter'); // will overwrite name with new value if the key is the same
localStorage.setItem('friend', 'peter');

localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name'); // retrieves value of locally stored item corresponding to the name key
console.log(name);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName); // unable to retrieve name after it is removed
localStorage.clear(); // clears the local storage
