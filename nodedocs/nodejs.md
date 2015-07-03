node.js
=======
-----

**these notes were taken for nodejs v0.12.5**

## Stability index
In the api documentation each section will have a number that indicatates its stability
* ``` 0 = Depricated```
* ``` 1 = Ecperimental```
* ``` 2 = Unstable ```
* ``` 4 = frozen, well tested and will likley never changed ```
* ``` 5 = locked, unless serious bugs are found this code will not ever change```
-----
## Assertion Testing
#### Assert
**Stability: 5, locked**
this module is used for writing unit tests for your applications
* assert.fail ```assert.fail( actual, expected, message, opperator)```
 * this prints actual expected and then throws an exception
  * **this seems useless** its basicaly printing wat you put in the fields and then throwing assert eql? true & false
* asset ```assert(value, message)```
 * test if something is truthy
* assert.equal ```assert.equal(actual, expected, message)```
  * test if two things are equal using the == comparison operator

 
