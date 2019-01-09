
const typeDefinitions = `
  type Organization = {
    name: String!,
    createdAt: String,
    updatedAt: String
  } 

  type Event = {
    date: String!,
    description: String,
    createdAt: String,
    updatedAt: String
  }

  type Location = {
    name: String!,
    address: String,
    latitude: String,
    longitude: String,
    createdAt: String,
    updatedAt: String
  }

  # the schema allows the following query:
  type Query {
  }

  # this schema allows the following mutation:
  type Mutation {
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export default typeDefinitions;
