var assert = require('assert');
var colors = require('colors');
var l = console.log;

var printAssert = function(assertFunctionName, expected, result){
  if (typeof(expected) != 'object'){
    var paramString = '' + expected + ' ' + result;
    process.stdout.write('   ' + paramString);
  } else {
    process.stdout.write('   ');
    process.stdout.write(JSON.stringify(expected) + ' ' +  JSON.stringify(result));
    
  }
  try {
    assert[assertFunctionName](expected, result);
    console.log(" ---> success".green);
  } catch (e) {
    /* handle error */
    console.log(" ---> fail".red);
  }
}

var assertFunctionNames =  [
  "equal",
  "notEqual",
  "deepEqual",
  "notDeepEqual",
  "strictEqual",
  "notStrictEqual",
];

var assertParams = [
  [true, true],
  [true, false],
  [1, 1],
  [1, 0],
  ['abc', 'abc'],
  ['abc', 'xxx'],
  [{}, {}],
  [{}, {a: 0}],
  [[0], [0]],
  [[0], [1]],
  [NaN, NaN],
  [0, NaN],
  [0, null],
  [null, null],
  [Infinity, Infinity],
  [0, Infinity],
];

assertFunctionNames.forEach(function(name){
  console.log('assert.'.cyan + name.cyan);
  assertParams.forEach(function(args){
    printAssert(name, args[0], args[1]);
  });
  console.log();
});

console.log('assert.fail'.cyan);
assertParams.forEach(function(param){
  process.stdout.write("   " +  JSON.stringify(param[0]) + " " + JSON.stringify(param[1]) + ' null ' + " ==");
  try {
    assert.fail(param[0], param[1], null, '==');
  console.log(' ---> success'.green);
  } catch (e) {
    /* handle error */
  console.log(' ---> fail'.red);
  }
});


//process.stdout.write('    true true null "=="');
//try {
  //assert.fail(true, true, null, "==")
  //console.log(' ---> success'.green);
//} catch(e) {
  //console.log(' ---> fail'.red);
//}

console.log('\nassert'.cyan);

var assertParams = [
  'string',
  0,
  [],
  {},
  true,
  false,
  null,
  NaN,
  Infinity
];

assertParams.forEach(function(param){
  if (typeof(param) == 'object'){
    process.stdout.write('    ' + JSON.stringify(param));
  } else {
    process.stdout.write('    ' + param);
  }

  try {
    assert(param);
    console.log(' ---> success'.green);
  } catch (e) {
    /* handle error */
    console.log(' ---> fail'.red);
  }
});

console.log('\nifError'.cyan);
assertParams.forEach(function(param){
  if (typeof(param) == 'object'){
    process.stdout.write('    ' + JSON.stringify(param));
  } else {
    process.stdout.write('    ' + param);
  }

  try {
    assert.ifError(param);
    console.log(' ---> success'.green);
  } catch (e) {
    /* handle error */
    console.log(' ---> fail'.red);
  }
});


console.log('\nthrows'.cyan);
process.stdout.write('    block-that-throws-error');
try {
  assert.throws(assert.fail);
  console.log(' ---> success'.green);
} catch (e) {
  /* handle error */
  console.log(' ---> fail'.red);
}

process.stdout.write('    block-that-dosnt-throws-error');
try {
  assert.throws(function(){});
  console.log(' ---> success'.green);
} catch (e) {
  /* handle error */
  console.log(' ---> fail'.red);
}


console.log('\ndoesNotThow'.cyan);
process.stdout.write('    block-that-throws-error');
try {
  assert.doesNotThrow(assert.fail);
  console.log(' ---> success'.green);
} catch (e) {
  /* handle error */
  console.log(' ---> fail'.red);
}

process.stdout.write('    block-that-dosnt-throws-error');
try {
  assert.doesNotThrow(function(){});
  console.log(' ---> success'.green);
} catch (e) {
  /* handle error */
  console.log(' ---> fail'.red);
}

