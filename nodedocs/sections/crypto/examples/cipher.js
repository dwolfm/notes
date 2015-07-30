'use strict';

var crypto = require('crypto');

var data = {test: 'make me encrypted'};
var password = "password1324";
console.log('about to create cipher from');
console.log('data: ', data);
console.log('password: ', password);

var enciphered;
var aes192 = crypto.createCipher('aes192', password);
console.log(aes192);
var str = JSON.stringify(data).toString();

console.log('str type', typeof(str));
console.log('litrl str type', typeof('whats up slog'));

var lul = 'hey ther'

aes192.write('');
aes192.end(str);
enciphered = aes192.read().toString('hex');
console.log('e', enciphered);

var deaes = crypto.createDecipher('aes192', password);

deaes.update(enciphered, 'hex', 'utf8');
deaes.end();
console.log(deaes.final().toString());

//deaes.write(enciphered);
//deaes.end();
//console.log(deaes.read().toString('utf8'));
//console.log(deaes);

//console.log(deaes.final().toString());


