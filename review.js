// This is intentionally bad JavaScript code for review purposes
function addNumbers(a, b, c) {
  return a + b; // The third parameter 'c' is never used
}

var myArray = [1, 2, 3, 4, 5];
for (i = 0; i < myArray.length; i++) { // 'i' is not declared with var, let, or const
  console.log(myArray[i]);
}

if (true) {
  var x = 10; // Using 'var' inside a block, which can lead to scope issues
}
console.log(x); // 'x' is accessible outside the block

function doSomething() {
  return; // Unnecessary return statement
  console.log("This will never run"); // Dead code
}

addNumbers(5, 10);