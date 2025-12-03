console.log("Hello World");

async function sleep() {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(45)
		}, 1000)
	})
}

function sum(a, b, c) {
	console.log(a + b + c)
}

// IIFE (Imediate Invoke Function)
// this function runs as soon as it is defined
(async function main(){
	console.log(a1); // Interpreter Puts var declaration at the top of block where it is written but this won't work for let & const

	// console.log(await sleep())
	// console.log(await sleep())

	// Destructuring of array means to unpack values from an array in different vars
	
	// let [x, y, z] = [1, 2, 3, 4, 5, 6, 7]
	// console.log(x, y, z)

	// Similarly, we can also apply destructuring on a obj

	let obj = {
		a: 1,
		b: 2,
		c: 3
	}

	let {a, b} = obj;
	console.log(a, b)

	// Spread Operator is used to unpack array
	let arr = [1, 4, 67, 23]
	sum(arr[0], arr[1], arr[2])
	sum(...arr)

	// Hoisting
	// functions are also hoisted but const functions won't hoist
	var a1 = 23;
})()
