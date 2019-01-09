const express = require('express');

const graphqlExpress = require('graphql-server-express').graphqlExpress;
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// constants
const port = 3000;

// Mount GraphQL on /graphql
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});
app.use('/graphql', graphqlExpress({ schema }));

// server
var app = express();
app.listen(port, () => { 
    console.log('listening on port ', port)
})
