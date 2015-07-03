var assert = require('assert');
var colors = require('colors');
var l = console.log;

// I have wraped each assert in a try blocks so the programin 
// can continue exicuting even if an assert fails.


// assert.fail
l('assert.fail:'.cyan)
l("\ttrue true null '=='".blue);
try {
  assert.fail(true, true, null, '==');
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
  
}

// assert
l('assert:'.cyan)
l('\tNan'.blue);
try {
  assert(NaN);
  console.log("\t  success".green);
} catch (e) {
  console.log("\t  fail".red);
}

l('\t"string"'.blue);
try {
  assert("string")
  console.log("\t  success".green);
} catch (e) {
  console.log("\t  fail".red);
}

//assert.equal
l('assert.equal:'.cyan);

l('\ttrue true'.blue)
try {
  assert.equal(true, true);
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}


l('\t{} {}'.blue);
try {
  assert.equal({}, {});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\ttrue, false'.blue);
try {
  assert.equal(true, false);
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.notEqual
l('assert.notEqual'.cyan)

l('\ttrue true'.blue);
try {

  assert.notEqual(true, true);
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\ttrue false'.blue);
try {
  assert.notEqual(true, false);
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\t{} {}'.blue);
try {
  assert.notEqual({}, {});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.deepEqual

l('assert.deepEqual:'.cyan);
l('\t{} {}'.blue);
try {
  assert.deepEqual({},{});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\t{} {lul:"what"}'.blue);
try {
  assert.deepEqual({},{lul:"what"});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.deepNotEqual
l('assert.notDeepEqual:'.cyan)
l('\ttrue true'.blue);
try {
  assert.notDeepEqual(true, true);
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\t{} {}'.blue);
try {
  assert.notDeepEqual({}, {});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('\t{} {lul:"what"}'.blue);
try {
  assert.deepEqual({},{lul:"what"});
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.strictEqual
l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}
''
//assert.StrictNotEqual
l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.throws
l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.doesNotThrow
l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

//assert.ifError
l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}

l('assert:'.cyan);
try {
  console.log("\t  success".green);
} catch (e) {
  /* handle error */
  console.log("\t  fail".red);
}





num 
string
object
bool


