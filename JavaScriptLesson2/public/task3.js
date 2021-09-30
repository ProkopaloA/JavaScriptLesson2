/**
 * 
 */
function calculator(a, operator, b) {
	process.stdout.write(a + " " + operator + " " + b + " = ");
	
	let result = "";
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Invalid number!";

		} else if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
			throw "Invalid operator!";
		
		} else {
			switch (operator) {
				case ("+"): {
					result = a + b;
					break;
				}
				case ("-"): {
					result = a - b;
					break;
				}
				case ("*"): {
					result = a * b;
					break;
				}
				case ("/"): {
					if (b == 0) {
						throw "You can't divide by zero!";
					} else {
						result = a / b;
						break;
					}
				}
			}
		}
	} catch (error) {
		process.stdout.write(error);
	}

	return result;
}

let a = 15;
let b = 3.2;

console.log("Check the operation of the calculator:")
console.log(calculator(a, "+", b));
console.log(calculator(a, "-", b));
console.log(calculator(a, "*", b));
console.log(calculator(a, "/", b));
console.log();
console.log("Cheking the operation of the calculator on examples with errors:")
console.log(calculator("a", "+", b));
console.log(calculator(a, "+", "b"));
console.log(calculator(a, "add", b));
console.log(calculator(a, "/", 0));