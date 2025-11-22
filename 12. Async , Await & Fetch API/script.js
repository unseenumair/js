console.log("Hello World");

// If we want to wait for promise to resolve completely before moving to executethe next statements , we have two options :

// 1. Using .then()
/*
function getData(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(455);
		}, 3000);
	});
}

console.log("loading modules");
console.log("Do something else");
console.log("Loading Data");

let data = getData();

data.then((v)=>{
	console.log(v);
	console.log("Processing Data")
	console.log("task2");
}); */
// But this is dirty way of doing it, instead we prefer async/await

// 2. Using async/await

// async function always returns a promise, other values are wrapped inside it automatically

// await keyword makes JS wait until the promise settles and returns its value

// async function getData(){
	// // Simulating gettingData from a Server
	// return new Promise((resolve, reject)=>{
		// setTimeout(()=>{
			// resolve(455);
		// }, 3000);
	// });
// }

async function getData(){
	// Simulating gettingData from a Server
	let x = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Fetch API : Returns a Promise
	// return await x.text();
	return await x.json();
}

async function main(){
	console.log("loading modules");
	console.log("Do something else");
	console.log("Loading Data");

	let data = await getData(); // To use await, the calling function must be async and we have to wrap whole code (that will be affected by await) inside another async function

	console.log(data);
	console.log("Processing Data");
	console.log("task2");
}
main();
