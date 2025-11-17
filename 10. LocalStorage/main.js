// LocalStorage is used to store Key-Value Pairs data in browser and even after reloading browser or even device restart, it remains as it is. They are refferred for that particular domain from which the data is stored in LocalStorage.

// It is Better than Cookie bcz Cookie send data as per request to Server again and again

let key = prompt("Enter key you wanna set:");
let value = prompt("Enter value you wanna set:");

localStorage.setItem(key, value); // Send Key-Value data to LocalStorage

if (key.trim() === "" || value.trim() === ""){
	localStorage.removeItem(key); // Remove Key-Value data from LocalStorage
}

else {
	console.log(`The value at ${key} is ${localStorage.getItem(key)}`); // .getItem(key) is used to get value of key from LocalStorage
}

console.log(localStorage.length) // Gives Length of Key-Value Pairs
console.log(localStorage.key(0)) // Gives Value of Key at Index 0

localStorage.clear() // Clears all Data from LocalStorage

// LocalStorage only stores data as string in key-value pairs
