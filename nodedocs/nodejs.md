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
* ``` 3 = Stable ```
* ``` 4 = frozen, well tested and will likley never changed ```
* ``` 5 = locked, unless serious bugs are found this code will not ever change```  

-----
### [Assertion](https://github.com/slugbyte/notes/blob/master/nodedocs/sections/assert/assert.md)

# Buffer

```var buf = new Buffer();```
**Stability = 3**

Pure javascript is Unicode freindly but not nice to bindary data. When dealing with TCP streams or the file system, it's necessary to deal with octet streams. node has a few ways to handle manipulating, consuming, and creating octet streams. 
Raw dat is stored as instances of the Buffer class A buffer is simular to an array of integers, but corresponds to raw memory allocation outside the V8 heap. a Buffer cannot be resized.

The Buffer class is a global, making it very rare that one would need to ever require('buffer').

## converting between buffers and strings
 * Converting between buffers and strings requireds a specific encodeing 
  * ```acii``` - for 7 bit ASCII data
  * ```utf8``` - for multibyte encoded unicode characters
  * ```utf16le``` - 2 or 4 byte, little endian unicode
  * ```ucs2``` - alias of utf16le
  * ```base64``` - Base64 sring encoding
  * ```hex``` - encode each byte as two hexadecimal characters
  * **binary** - this is deprecated
# creating Buffers from an typed aray
 * the buffers memory is copied, not shared
 * the buffers memory is interperated as an array, not a byte array  
 ``` 
var a = [1,2,3,4];  
var b = new Buffer(a);  
// b - <Buffer 01 02 03 04>  
var c = new Uint32Array(b)  
// c = [1,2,3,4];  
```
  
  

