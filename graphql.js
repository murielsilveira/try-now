const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
  }

  type Query {
    users: [User!]!
  }
`

const resolvers = {
  Query: {
    users() {
      return [
        {
          id: 1,
          firstName: 'first user',
        },
      ]
    }
  },
}

module.exports = {
  typeDefs,
  resolvers
}
