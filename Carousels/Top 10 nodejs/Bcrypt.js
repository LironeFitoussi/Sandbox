const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    console.log('Hashed password:', hash);

    // To check a password:
    bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
        console.log('Password match:', result);
    });
});