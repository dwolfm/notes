## Assertion Testing  

### Assert  Module
this module is used for writing unit tests for your applications  
``` var assert = require('assert');```  

#### assert.fail 
```assert.fail( actual, expected, message, opperator)```
 * this prints actual expected and then throws an exception
  * **this seems useless** its basicaly printing wat you put in the fields and then throwing assert eql? true & false

#### assert  
```assert(value, *message)```
 * test if something is truthy

#### assert.equal  
```assert.equal(actual, expected, *message)```
 * test if two things are equal using the == operator  

#### assert.notEqual 
```assert.notEqual(actual, expected, *message)```
 * test if two things are not not equal using the != operator

#### assert.deepEqual  
``` assert.deepEqual(actual, expected, *message)```
 * test for deep equality

#### assert.deepNotEqual  
```assert.deepNotEqual(actual, expected, *message)```
 * test for deep inequality

#### assert.strictEqual  
```assert.strictEqual('actual, expected, *message)```
 * test if two things are equal using the === operator

#### assert.strictNotEqual  
```assert.strictNotEqual('actual, expected, *message)```
 * test if two things are not equal using the !== operatior

#### assert.throws  
``` assert.throws(block, *error, *message)
 * check to see if a bock thows an error
  * check to see if the bock thows a specific error

#### assert.doesNotThrow  
```assert.doesNotThrow(bock, *message)```
 * check to see if a block does not throw an error

#### assert.ifError  
 ``` assert.ifError(value) ```  
 * check for falsey

 
