const CryptoJS = require('crypto-js');

// const secretKey = 'tempPass'; // 32-byte key
// const password = 'password123';

// Encrypt
const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
console.log('Encrypted Password:', encryptedPassword);



