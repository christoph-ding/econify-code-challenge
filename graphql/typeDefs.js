const typeDefs = `
  type Organization {
    id: ID!,
    name: String,
    createdAt: String,
    updatedAt: String
  } 

  type Event {
    id: ID,
    date: String,
    description: String,
    createdAt: String,
    updatedAt: String
  }

  type Location {
    id: ID,
    name: String,
    address: String,
    latitude: String,
    longitude: String,
    createdAt: String,
    updatedAt: String
  }

  # the schema allows the following query:
  type Query {
    test: String
    organization(id: ID!): Organization
    organizations: [Organization]
    event(id: ID!): Event
    events: [Event]
    location(id: ID!): Location
    locations: [Location]
  }

  type Mutation {
    createOrganization(name: String!): Organization!
    createEvent: String
    createLocation: String
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`

export default typeDefs;
