console.log("I am working...");

let a = prompt("Enter 1 Number:");
let b = prompt("Enter 2 Number:");

if (isNaN(a) || isNaN(b)){
	throw Error("Sorry, string is not allowed"); // If we throw error, script stops to execute further
} // if a or b is not a number, then throw an Error Msg

let sum;

// sum = a + b; // This is not an error, + just concate these 2 strings. If we want to perform opeartion we need to convert them to numbers.
sum = parseInt(a) + parseInt(b);


// console.log(`Sum of ${a} and ${b} is = ${sum}`);

// Handle Error Msg using Try-Catch
/*
try {
	console.log(`Sum of ${a} and ${b} is = ${sum*x}`);
} catch(error){
	console.log(error); // Error MSG will be displayed as normal log not as red
	console.log("Error a ghaya bhai!")
}
*/

function main(){
	try {
		console.log(sum*x);
		return true
	}
	catch(error) {
		console.log(error);
		return false
	}
	finally {
		console.log("Good Bye!");
	} // this runs even if we have use return above it
}

let c = main();

// Try-Catch works sync, if code is async, catch won't handle error

// 1. CallBack Example
// This will NOT catch the error
try {
    setTimeout(() => {
        console.log(z); // ReferenceError happens later
    }, 1000);
} catch (err) {
    console.log('caught:', err); // never reached
}

// 2. Correct Way
async function run() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    console.log(z); // throws
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }, 1000);
        });
    } catch (err) {
        console.log('caught:', err);
    }
}

run();

// 3. Using async function inside tryCatch :
async function asyncOperation() {
    throw new Error('Something went wrong');
}

async function run() {
    try {
        const result = await asyncOperation(); // rejection caught here
        console.log(result);
    } catch (err) {
        console.log('caught:', err);
    }
}

run();
