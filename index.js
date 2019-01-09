const express = require('express');
const bodyParser = require('body-parser')

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// constants


// GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});

// server
const port = 3000;
const app = express();

// middleware
app.use(bodyParser.json());
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () => { 
    console.log('listening on port ', port)
})
