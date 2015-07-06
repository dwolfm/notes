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
the buffer class is a global type for dealing with bindary data directly.  
**Stability = 3**  

## more about
Pure javascript is Unicode freindly but not nice to bindary data. When dealing with TCP streams or the file system, it's necessary to deal with octet streams. node has a few ways to handle manipulating, consuming, and creating octet streams. 
Raw dat is stored as instances of the Buffer class A buffer is simular to an array of integers, but corresponds to raw memory allocation outside the V8 heap. a Buffer cannot be resized.

The Buffer class is a global, making it very rare that one would need to ever require('buffer').

## Creating buffers
 * ``` new Buffer(size) ``` allocates a new buffer of size octets(bytes)
 * ``` new Buffer(array) ``` allocates a new buffer using an array of octets
 * ``` new Buffer(buffer) ``` copys the passed buffer data onto a new Buffer instance
 * ``` new Buffer(str, *encoding) ``` allocates a new buffer containing a givin string, defaults to utf8
 
## Buffer metadata
* ``` Buffer.isEncoding(encoding) ``` returns true if the encoding is a valid encoding argument, or false otherwise
* ``` Buffer.isBuffer(obj) ``` test if object is a buffer
* ``` Buffer.byteLength(str, *encoding) ``` gives the actual byte length of a string. defautls to enc utf8
* ``` Buffer.concat(list, *totalLength) ``` concatinates the buffers in the list
 * if no buffers are in the list it returns a buffer of length 0
 * if 1 buffer is in the list it returns that buffer
 * if multiple buffers are in the list it returns a new buffer
 * providing the totalLength makes this much faster

## converting between buffers and strings
 * Converting between buffers and strings requireds a specific encodeing 
  * ```acii``` - for 7 bit ASCII data
  * ```utf8``` - for multibyte encoded unicode characters
  * ```utf16le``` - 2 or 4 byte, little endian unicode
  * ```ucs2``` - alias of utf16le
  * ```base64``` - Base64 sring encoding
  * ```hex``` - encode each byte as two hexadecimal characters
  * **binary** - this is deprecated

## creating Buffers from an typed aray
 * the buffers memory is copied, not shared
 * the buffers memory is interperated as an array, not a byte array
 
 ```
var a = [1,2,3,4];

var b = new Buffer(a);  
// b - <Buffer 01 02 03 04>  

var c = new Uint32Array(b)
// c = [1,2,3,4]; 
```
## Class Methods
* ``` Buffer.isBuffer(obj) ``` test is obj is Buffer -> return boolean
* ``` Buffer.isEncoding(encoding) ``` test if the encoding is valid -> return boolean
* ``` Buffer.byteLength(string, *encoding) ``` gives the actual byte lenght of a string. default encoding = utf8
* ``` Buffer.concat(list, *totalLength) ``` concatinates the buffers in the list
 * if no buffers are in the list it returns a buffer of length 0
 * if 1 buffer is in the list it returns that buffer
 * if multiple buffers are in the list it returns a new buffer
 * providing the totalLength makes this much faster
* ``` buf.length ``` retrun the size of the buffer in bytes.

## writing to buffer
#### indexing a buffer
 * ```buf[index]``` get and set the octet at index (just like an array)

#### writing strings
 * ``` buf.write(string, *offset, *length, *encoding)``` * writes a string to the buffer
 * offset defaults to 0
 * encoding defalts to utf8
 * if buffer did not conain enough space to fit the entire string it will wrate a partial amount of the string. 
 * length defalts to buffer.length

#### writing integers
* ```buf.writeUIntLE(value, offset, byteLength, *noAssert)```
* ```buf.writeUIntBE(value, offset, byteLength, *noAssert)```
* ```buf.writeIntLE(value, offset, byteLength, *noAssert)```
* ```buf.writeIntBE(value, offset, byteLength, *noAssert)```
 * **value** - number to be written to buffer
 * **offset** - must be 0 <= offset <= buf.lenth
 * **byteLength** - must be 0 < byteLength <= 6 // suports 48 bits of acuracy
 * **noAssert** - Boolean,  set to true to skip validation off offset
 * returns the number written
 ``` 
var b = new Buffer(6);
b.writeUIntBE(0x1234567890ab, 0, 6);
// <Buffer 12 34 56 78 90 ab>
```

#### reading integers
* ```buf.readUIntLE(offset, byteLength, *noAssert)```
* ```buf.readUIntBE(offset, byteLength, *noAssert)```
* ```buf.readIntLE(offset, byteLength, *noAssert)```
* ```buf.readIntBE(offset, byteLength, *noAssert)```
 * **offset** - must be 0 <= offset <= buf.lenth
 * **byteLength** - must be 0 < byteLength <= 6 // suports 48 bits of acuracy
 * **noAssert** - Defalut:false
 * returns the number written
* ``` ReadUInt16LE(offset, *noAssert)```
* ``` ReadUInt16BE(offset, *noAssert)```
* ``` ReadUInt32LE(offset, *noAssert)```
* ``` ReadUInt32BE(offset, *noAssert)```
* ``` ReadUInt8LE(offset, *noAssert)```
* ``` ReadUInt8BE(offset, *noAssert)```
* ``` ReadInt16LE(offset, *noAssert)```
* ``` ReadInt16BE(offset, *noAssert)```
* ``` ReadInt32LE(offset, *noAssert)```
* ``` ReadInt32BE(offset, *noAssert)```
* ``` ReadInt8LE(offset, *noAssert)```
* ``` ReadInt8BE(offset, *noAssert)```
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip validation off offset

#### reading floats and doubles
* 


#### convert to stirng
#### convert to JSON
 
