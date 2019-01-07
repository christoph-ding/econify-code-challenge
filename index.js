var express = require('express');

import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// constants
const port = 3000;

// server
var app = express();
app.listen(port, () => { 
    console.log('listening on port ', port)
})
