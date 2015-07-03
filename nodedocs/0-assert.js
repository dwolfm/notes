var assert = require('assert');
var colors = require('colors');
var l = console.log;

l('assert.fail: true == true'.cyan)  
try {
assert.fail(true, true, 'true should equal true', '==');
console.log("\tsuccessi".green);
} catch (e) {
  /* handle error */
  console.log("\tfail".red);
  l("\t".red + e);
}


l('assert: Nan'.cyan);
try {
assert(NaN);
} catch (e) {
  console.log("\tfail".red);
  l("\t" + e)
}

l('assert: "string"'.cyan);
try {
assert("string")
} catch (e) {
  console.log("\tfail".red);
  l("\t" + e)
}



