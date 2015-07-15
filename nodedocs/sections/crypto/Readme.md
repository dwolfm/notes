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
* load and set engine for some/all OpenSSl functions (selected by flags)

#### crypto.getCiphers()
#### crypto.getHashes()
#### crypto.createCredentials(details)

----
## Class Hash
* A hash is a fixed-length string of bits that is procedurally and deterministially generated from some arbitrary block of source data 
* hash propertys
 * **fixed length** - no matter the input output is consistant lenght
 * **Deterministic** - for same input allways get same output
 * **Collision-Resistant** - unlikely to have to inputs gen same output
 * **Unidirectional** - given just a hash, really hard to find out origional data
#### crypto.createHash(algorithm)
#### hash.update(data, \*input\_encodeing) 
#### hash.digesti(\*encoding)

----
## Class Hmac
* stands for Hash-based Message Authentication Code
* is a process for applyting a hash algorithm to both data and a secret key that results in a single final hash.
* use is simular to vanilla hash, but also allows to check the authenticity of data as well as the integreity of said data (as you can using md5 sums

#### crypto.createHmac(algorithm, key)
#### hmac.update(data)
#### hmac.digest(\*encoding)

----
## Class Cipher
* Ciphers allow you to encode and decode messages given a password
#### crypto.createCipher(algorithm, password)
#### crypto.createCipheriv(algorithm, key, iv)
#### cipher.update(daat, \*input\_encoding, \*output\_encoding)
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


