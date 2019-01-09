const express = require('express');

// import { graphqlExpress } from 'graphql-server-express';
// const graphqlExpress = require('graphql-server-express').graphqlExpress;

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

// constants
const port = 3000;

// server
var app = express();
app.listen(port, () => { 
    console.log('listening on port ', port)
})
