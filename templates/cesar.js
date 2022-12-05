const Cryptr = require("cryptr");
const cryptr = new Cryptr("ReallySecretKey");

const encryptedString = cryptr.encrypt("Popcorn");
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString);
