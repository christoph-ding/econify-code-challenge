var express = require('express');

// constants
const port = 3000;

// server
var app = express();
app.listen(port, () => { 
    console.log('listening on port ', port)
})
