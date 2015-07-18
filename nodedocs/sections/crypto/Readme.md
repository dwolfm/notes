crypto
======
` var crypto = require('crypto')`
* the crypto mdule offers a way of encapsulating secure credentials to be used as part of a secure HTTPS net or http connextion.
* Stability: **2** - Unstable; 

----
#Crypto
#### crypto.setEngine(engine, i\*flags)
* **engine** - String, id or path to the engine's shared library
* **flags** - 
 * ENGINE\_METHOD\_RSA
 * ENGINE\_METHOD\_DSA
 * ENGINE\_METHOD\_DH
 * ENGINE\_METHOD\_RAND
 * ENGINE\_METHOD\_ECDH
 * ENGINE\_METHOD\_ECDSA
 * ENGINE\_METHOD\_CIPHERS
 * ENGINE\_METHOD\_DIGESTS
 * ENGINE\_METHOD\_STORE
 * ENGINE\_METHOD\_PKEY\_METH
 * ENGINE\_METHOD\_PKEY\_ASN1\_METH
 * ENGINE\_METHOD\_ALL
 * ENGINE\_METHOD\_NONE 
* load and set engine for some/all OpenSSl functions (selected by flags)

#### crypto.getCiphers()
* Returns an array with the names of suported cipheres
* there is a lot

#### crypto.getHashes()
* Returns an array with the names of suported cipheres
* there is a lot

----
## Class Hash
* A hash is a fixed-length string of bits that is procedurally and deterministially generated from some arbitrary block of source data 
* hash propertys
 * **fixed length** - no matter the input output is consistant lenght
 * **Deterministic** - for same input allways get same output
 * **Collision-Resistant** - unlikely to have to inputs gen same output
 * **Unidirectional** - given just a hash, really hard to find out origional data
#### crypto.createHash(algorithm)
* creates and returns a hash object
* a cryptographich hash with the given algorithm which can be used to generate hash digests
```
// this program that take the sha1 sum of a file
var fs = require('fs');
var crypto = require('crypto');

fs.readFile('path/to/file', function(err, data){
  if (err) throw err;
  var sha = c.createHash('sha1');
  sha.update(data)
  console.log('sha.digest('hex'));
});
```

#### hash.update(data, \*input\_encodeing) 
* updates the hash content with the given data
* **data** - String || Buffer
* **encoding** - String, 'utf8', 'binary,  'ascii'... default: binary

#### hash.digeset(\*encoding)
* calculates the digest of all teh passed data to be hashed.
* the **encoding**, can be
 * `hex`
 * `binary`
 * `base64`
 * if none provided then a buffer is returned

----
## Class Hmac
* stands for Hash-based Message Authentication Code
* is a process for applyting a hash algorithm to both data and a secret key that results in a single final hash.
* use is simular to vanilla hash, but also allows to check the authenticity of data as well as the integreity of said data (as you can using md5 sums

#### crypto.createHmac(algorithm, key)
* creates and returns a hmac object, a cryptographic 
#### hmac.update(data, \*input\_encodeing) 
* updates the hmac content with the given data
* **data** - String || Buffer
* **encoding** - String, 'utf8', 'binary,  'ascii'... default: binary

#### hmac.digeset(\*encoding)
* calculates the digest of all teh passed data to be hmaced.
* the **encoding**, can be
 * `hex`
 * `binary`
 * `base64`
 * if none provided then a buffer is returned

----
## Class Cipher
* Ciphers allow you to encode and decode messages given a password
* the cipher class is for encrypting data
#### crypto.createCipher(algorithm, password)
* creates and retuns a cyper object with a the given algorithm and password
* it is a **stream** that is both readable and writeable.
 * the written data is used to compute the hash.
 * once the writeable side of the stream has ended, use the `read()` method to get enciphered contents.
 * the update and final methods are legacy
#### crypto.createCipheriv(algorithm, key, iv)
* creates and returns a cyper object with the given algorithm, key and iv
* **key** and **iv** must be `binary` encoded strings or `buffers`
#### cipher.update(daat, \*input\_encoding, \*output\_encoding)
* **data** - String or Buffer -  
#### cipher.final(\*output\_encoding)
#### cipher.setAutoPadding(auto\_padding=true)
#### cipher.getAuthTag()
#### cipher.setAAD(buffer)

----
## Class Decipher
#### crypto.createDecipher(algorithm, password)
#### crypto.createDecipheriv(algorithm, key, iv)
#### decipher.update(daat, \*input\_encoding, \*output\_encoding)
#### decipher.final(\*output\_encoding)
#### decipher.setAutoPadding(auto\_padding=true)
#### decipher.getAuthTag()
#### decipher.setAAD(buffer)


----
# resources
https://docs.nodejitsu.com/articles/cryptography/how-to-use-crypto-module


