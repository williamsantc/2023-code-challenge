const assert = require('assert');
const minWindow = require('./challenge.js')

// test case 1
let result = minWindow("ADOBECODEBANC", "ABC");
assert.strictEqual(result, "BANC", 'Test case 1 failed');

// test case 2
result = minWindow("HELLO", "LL");
assert.strictEqual(result, "LL", 'Test case 2 failed');

// test case 4
result = minWindow("JAVASCRIPT", "SCT");
assert.strictEqual(result, "SCRIPT", 'Test case 3 failed');


result = minWindow("this is a test string", "tist");
assert.strictEqual(result, "t stri", 'Test case 4 failed');

// Additional test case 2
result = minWindow("geeksforgeeks", "ork");
assert.strictEqual(result, "ksfor", 'Test case 5 failed');

console.log('All tests passed!');
