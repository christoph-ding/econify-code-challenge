const typeDefs = `
  type Organization {
    id: ID!,
    name: String!,
    createdAt: String,
    updatedAt: String
  }

  type Event {
    id: ID!,
    name: String!,
    date: String,
    description: String,
    createdAt: String,
    updatedAt: String
  }

  type Location {
    id: ID!,
    name: String!,
    address: String,
    latitude: String,
    longitude: String,
    createdAt: String,
    updatedAt: String
  }

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
    createOrganization(name: String!): Organization!
    deleteOrganization(name: String!): String
    updateOrganization(originalName: String!, newName: String!): String
    createEvent(name: String!, date: String, description: String): Event!
    deleteEvent(name: String!): String
    updateEvent(originalName: String!, name: String, date: String, description: String): String
    createLocation(name: String!, address: String, latitude: String, longitude: String): Location!
    deleteLocation: String
    updateLocation(originalName: String!, address: String, latitude: String, longitude: String): String
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`
// createLocation(name: String!, address: String, latitude: String, longitude: String): Location!

export default typeDefs;
