require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`The secret key is: ${process.env.SECRET_KEY}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));