import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

import UserAPI from './datasources/userAPI'

import resolvers from './resolvers/resolvers'

const context = async ({ req }: {req: any}) => {}

const dataSources = () => ({
  userAPI: new UserAPI(),
})


const server = new ApolloServer({
  typeDefs,
  context,
  dataSources,
  resolvers
})

const PORT = process.env.PORT || 2323
const devURI = `http://localhost:${PORT}/graphql`

server.listen({ port: PORT }).then(() => {
  console.log(`
  
     -------------------------------------------------  
    | 🚀 Server is running on
    | ${devURI}
    | Listening on port ${PORT}
    | Query at https://studio.apollographql.com/dev
     -------------------------------------------------

  `)
})

module.exports = {
  dataSources,
  context,
  typeDefs,
  // resolvers,
  ApolloServer,
  // LaunchAPI,
  // UserAPI,
  // db,
  server,
};
