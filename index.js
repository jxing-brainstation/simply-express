const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue">Welcome to my BRAND NEW Express App</h1>`);
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});