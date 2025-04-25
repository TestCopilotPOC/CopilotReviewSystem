// This is intentionally bad JavaScript code for review purposes
function addNumbers(a, b) {
  return a + b; // Removed the unused parameter 'c'
}

var myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) { // Declared 'i' with 'let' to limit its scope
  console.log(myArray[i]);
}

if (true) {
  let x = 10; // Changed 'var' to 'let' to limit scope to the block
  console.log(x); // Moved 'console.log' inside the block
}

function doSomething() {
  console.log("Doing something"); // Removed unnecessary return and dead code
}

addNumbers(5, 10);console.log(addNumbers(5, 10)); // Added console.log to display the result