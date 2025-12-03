console.log("Hello World!");

// The work using OOP can also be acheived with functional JS but OOP allows us to create real world objects and to use them

// Class is like a template of Unfilled Form
// Object is like a filled form
// For Example : Umair filled a bank form and now that form called as "Umair's Form" , if Azeem filled a bank form and now that form called as "Azeem's Form" but initially the form is blank and that's a class and filled forms are objects

/*

let obj = {
	a: 1,
	b: "Umair"
}

console.log(obj);

let animal = {
	eats: true
}

let rabbit = {
	jumps: true
}

// [[Prototype]] are additional properties given to a data type

rabbit.__proto__ = animal; // set rabbit.[[Prototype]] = animal

*/

class Animal {
	// constructor() run auto whenever class is called
	constructor(name){
		this.name = name
		console.log("Object Created!")
	}
	eats() {
		console.log("kha raha ho")
	}
	runs() {
		console.log("Bhag raha ho")
	}
}

// to use a class inside another we can extend it as
class Lion extends Animal {
	constructor(name) {
		super(name); // Call the constructor of class from which we extend
		console.log("New Obj Created!");
	}
	roar() {
		console.log("I am roaring...")
	}
	// Method OverRiding ; following will overWrite eats() from inherited class
	eats() {
		super.eats(); // runs the eats() of inherited class
		console.log("kha raha ho roar!")
	}
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
