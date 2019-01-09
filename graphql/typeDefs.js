const typeDefs = `
  type Organization {
    id: ID!,
    name: String,
    createdAt: String,
    updatedAt: String
  } 

  type Event {
    id: ID!,
    date: String!,
    description: String,
    createdAt: String,
    updatedAt: String
  }

  type Location {
    id: ID,
    name: String!,
    address: String,
    latitude: String,
    longitude: String,
    createdAt: String,
    updatedAt: String
  }
o
  # the schema allows the following query:
  type Query {
    organization(id: ID!): Organization
    organizations: [Organization]
    event(id: ID!): Event
    events: [Event]
    location(id: ID!): Location
    locations: [Location]
  }

  type Mutation {
    test: String
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`

export default typeDefs;

  // # this schema allows the following mutation:
  // type Mutation {
  // }

  // organizations: [Organization]

  // schema {
  //   query: Query
  //   mutation: Mutation
  // }
