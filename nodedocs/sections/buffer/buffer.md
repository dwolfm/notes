# Buffer
*  ``` var buf = new Buffer(); ```  
* the buffer class is a global type for dealing with bindary data directly.  
**Stability = 3**  

## more about
Pure javascript is Unicode freindly but not nice to bindary data. When dealing with TCP streams or the file system, it's necessary to deal with octet streams. node has a few ways to handle manipulating, consuming, and creating octet streams. 
Raw dat is stored as instances of the Buffer class A buffer is simular to an array of integers, but corresponds to raw memory allocation outside the V8 heap. a Buffer cannot be resized.

The Buffer class is a global, making it very rare that one would need to ever require('buffer').

## Creating buffers
 * ``` new Buffer(size) ``` allocates a new buffer of size octets(bytes)
 * ``` new Buffer(array) ``` allocates a new buffer using an array of octets
 * ``` new Buffer(buffer) ``` copys the passed buffer data onto a new Buffer instance
 * ``` new Buffer(str, *encoding) ``` allocates a new buffer containing a givin string, Defaluts to utf8
 
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
#### buffer info
* ``` Buffer.isBuffer(obj) ``` test is obj is Buffer -> return boolean
* ``` Buffer.isEncoding(encoding) ``` test if the encoding is valid -> return boolean
* ``` Buffer.byteLength(string, *encoding) ``` gives the actual byte lenght of a string. Defalut encoding = utf8
* ``` buf.length ``` retrun the size of the buffer in bytes.

#### comparing buffers
* ``` buf.equals(otherBuffer) ``` returns boolean of weather this and otherbuffer have the same bytes
* ``` buf.compare(otherbuffer) ``` returns a bynber indicating wheather this comes before or after or is the same as the other buffer in a sort

#### copying, slice, and concat
* ``` buf.copy( targetBuffer, *targetStart, *sourceStart, *sourceEnd)
 * **targetBuffer** -  bufer to copy into 
 * **targetStart** - Number, defalt: 0
 * **sourceStart** - Number, defalut: 0
 * **sourceEnd** - Number, Default: buffer.length
* ``` buf.slice(*slice, *end) ``` returns a new buffer witch references the same memory as teh old by offset and cropped by start, end
 * **slice** - Number , Defalut: 0
 * **end** - Number, Defalut: buffer.lengtht
 * Negitive indexes start from the end of the buffer
* ``` Buffer.concat(list, *totalLength) ``` concatinates the buffers in the list
 * if no buffers are in the list it returns a buffer of length 0
 * if 1 buffer is in the list it returns that buffer
 * if multiple buffers are in the list it returns a new buffer
 * providing the totalLength makes this much faster

## writing to buffer
#### indexing a buffer
 * ```buf[index]``` get and set the octet at index (just like an array)

#### writing strings
 * ``` buf.write(string, *offset, *length, *encoding)``` * writes a string to the buffer
 * offset Defaluts to 0
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
* ``` writeUInt16LE(value, offset, *noAssert)```
* ``` writeUInt16BE(value, offset, *noAssert)```
* ``` writeUInt32LE(value, offset, *noAssert)```
* ``` writeUInt32BE(value, offset, *noAssert)```
* ``` writeUInt8(value, offset, *noAssert)```
* ``` writeInt16LE(value, offset, *noAssert)```
* ``` writeInt16BE(value, offset, *noAssert)```
* ``` writeInt32LE(value, offset, *noAssert)```
* ``` writeInt32BE(value, offset, *noAssert)```
* ``` writeInt8(value, offset, *noAssert)```
 * **value** - Number to write
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip validation off offset

#### reading integers
* ```buf.readUIntLE(offset, byteLength, *noAssert)```
* ```buf.readUIntBE(offset, byteLength, *noAssert)```
* ```buf.readIntLE(offset, byteLength, *noAssert)```
* ```buf.readIntBE(offset, byteLength, *noAssert)```
 * **offset** - must be 0 <= offset <= buf.lenth
 * **byteLength** - must be 0 < byteLength <= 6 // suports 48 bits of acuracy
 * **noAssert** - Defalut:false
 * returns the number written
* ``` readUInt16LE(offset, *noAssert)```
* ``` readUInt16BE(offset, *noAssert)```
* ``` readUInt32LE(offset, *noAssert)```
* ``` readUInt32BE(offset, *noAssert)```
* ``` readUInt8(offset, *noAssert)```
* ``` readInt16LE(offset, *noAssert)```
* ``` readInt16BE(offset, *noAssert)```
* ``` readInt32LE(offset, *noAssert)```
* ``` readInt32BE(offset, *noAssert)```
* ``` readInt8(offset, *noAssert)```
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip offset validation

#### reading floats and doubles
* ``` buf.readFolatLE( offset, *noAssert) ```
* ``` buf.readFolatBE( offset, *noAssert) ```
* ``` buf.doubleFolatLE( offset, *noAssert) ```
* ``` buf.doubleFolatBE( offset, *noAssert) ```
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip offset validation
 * reads a 32-64bit float from the buffer at the specified offset
 * set noAssert to true to skip offset validation

#### writeing floats and doubles
* ``` buf.writeFolatLE(value, offset, *noAssert) ```
* ``` buf.writeFolatBE(value,  offset, *noAssert) ```
* ``` buf.doubleFolatLE(value,  offset, *noAssert) ```
* ``` buf.doubleFolatBE(value,  offset, *noAssert) ```
 * **value** - float to write
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip offset validation
 * writes a 32-64bit float from the buffer at the specified offset
 * set noAssert to true to skip offset validation

#### fill a buffer
* ``` buff.fill(value, *offset, *end) ``` fills the buffer with the specified value
 * **offset** - number of bytes into array, Defaults: 0
 * **end** - number of bytes into array to stop, Defaults, buffer.length

#### convert to stirng
* ``` buf.toString(*encoding, *start, *end) ``` decodes and returns a string from buffer data
 * **encoding** - String, Defalut: 'utf8'
 * **start** - Number, Default: 0
 * **end** - Number, Default: buffer.length

#### convert to JSON
* ``` buf.toJSON() ``` returns a JSON-representation of the Buffer instance.
 * JSON.stringify implicityly calls this when stringifying a buffer
 

# Class: SlowBuffer
* retunrs an un-pooled Buffer
* use this to avoid the cobage collection overhead of creating many individually allocated Buffers.
* this approach improves both performances and memory usage since v8 doent need to track or clean up as many Persistent objects
* **this should be uses sparingly**
```
// need to keep around a few small chunks of memory

var store = [];
sicket.on('readable', function(){
  var data = socket.read();
  // alocate for retained data
  var sb = new SlowBuffer(10);
  // copy the data into the new allocation
  data.copy(sb, 0, 0, 10);
  store.push(sb);
});
```


