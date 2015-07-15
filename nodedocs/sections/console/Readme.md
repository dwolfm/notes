Console
========

for printing to stdout and std err  
` Stability: 4 `

----

# Console Object
* the console object is a global
* the console functions are synchronous when the destination is a terminal or a file.

#### console.log
* prints to stdout with newline
* this function can take multiple arguements like `printf()`
```
var count = 100;
console.log('count at: %d', count);
// count at: 100
```

#### console.info
* same as console.log

#### console.error
* prints to stderr with newline
* this function can take multiple arguements like `printf()`
```
if (err) {
  console.error('ERROR: %d', 404);
}
// ERROR: 404
```

#### console.warn
* same as console.error

#### console.dir
* `console.dir(obj, *options)`
 * **obj** - Object
 * **options** - Object
  * **showHidden** - Boolean, if true the objects non-enumerable properties will be shown too, default: false
  * **depth** - Number, tells inspect how many times to recurse while formattingn the object. default: 2
  * **colors** - Boolean, if true then the output will be styled with ANSI color codes. default: false
* Uses util.inspect on obj and prints resulting string to stdout
```
var x = { who: {name: "car", time: 11, why: [0,1,2,3]}, when: 44, yes: false}
console.dir(x);
// { name: 'car', time: 11, why: [ 0, 1, 2, 3 ] },
//  when: 44, yes: false }
```

#### console.time && console.timeEnd
* `console.time('name')**`
 * mark a start time for a timer, to be used with timeEnd
* `console.timeEnd('name')`
 * finish timer, print output 
```
console.time('100-elements');
for (var i=0; i<100; i++){
  dosomething();
}
console.timeEnd(100-elements');
// 100-elements: 348ms
```

#### console.trace
* `console.trace(message)`
* print stderr **Trace: ** followed by the formated message and stack trace to the current position 

```
console.trace('soup dood');
Trace: soup dood
    at repl:1:9
    at REPLServer.defaultEval (repl.js:132:27)
    at bound (domain.js:254:14)
    at REPLServer.runBound [as eval] (domain.js:267:12)
    at REPLServer.<anonymous> (repl.js:279:12)
    at REPLServer.emit (events.js:107:17)
    at REPLServer.Interface._onLine (readline.js:214:10)
    at REPLServer.Interface._line (readline.js:553:8)
    at REPLServer.Interface._ttyWrite (readline.js:830:14)
    at ReadStream.onkeypress (readline.js:109:10)
```
