node.js
=======
-----

**these notes were taken for nodejs v0.12.5**

**if you see a * before an argument it is optional**
## Stability index
In the api documentation each section will have a number that indicatates its stability
* ``` 0 = Depricated```
* ``` 1 = Ecperimental```
* ``` 2 = Unstable ```
* ``` 4 = frozen, well tested and will likley never changed ```
* ``` 5 = locked, unless serious bugs are found this code will not ever change```
-----


## Assertion Testing  

>### Assert  Module
>this module is used for writing unit tests for your applications  
>``` var assert = require('assert');```  
>
>#### assert.fail 
>```assert.fail( actual, expected, message, opperator)```
> * this prints actual expected and then throws an exception
>  * **this seems useless** its basicaly printing wat you put in the fields and then throwing assert eql? true & false
>
>#### assert  
>```assert(value, *message)```
> * test if something is truthy
>
>#### assert.equal  
>```assert.equal(actual, expected, *message)```
> * test if two things are equal using the == operator  
>
>#### assert.notEqual 
>```assert.notEqual(actual, expected, *message)```
> * test if two things are not not equal using the != operator
>
>#### assert.deepEqual  
>``` assert.deepEqual(actual, expected, *message)```
> * test for deep equality
>
>#### assert.deepNotEqual  
>```assert.deepNotEqual(actual, expected, *message)```
> * test for deep inequality
>
>#### assert.strictEqual  
>```assert.strictEqual('actual, expected, *message)```
> * test if two things are equal using the === operator
>
>#### assert.strictNotEqual  
>```assert.strictNotEqual('actual, expected, *message)```
> * test if two things are not equal using the !== operatior
>
>#### assert.throws  
>``` assert.throws(block, *error, *message)
> * check to see if a bock thows an error
>  * check to see if the bock thows a specific error
>
>#### assert.doesNotThrow  
>```assert.doesNotThrow(bock, *message)```
> * check to see if a block does not throw an error
>
>#### assert.ifError  
> ``` assert.ifError(value) ```  
> * check for falsey

 
