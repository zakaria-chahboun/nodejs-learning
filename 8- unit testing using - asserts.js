/*
unit testing using "asserts"
*/

// test for functions/objects :: its very useful in complicated functions
var assert = require('assert');

// Exemple :
function mult(a,b) {
	return a*b;
}

// now we testing :: if the rule is correct == 'nothing in output', if not == 'message error in output'
result = mult(5,3); // 5*3=15
assert(result == 15, "error message 1!"); // Nothing shows
//assert.equal(result,15,"error message 1!"); // same of first
assert(result != 15, "error message 2!"); // Error message shows