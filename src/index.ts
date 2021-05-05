import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

const context = async ({ req }: {req: any}) => {}

const server = new ApolloServer({
  typeDefs,
  context,
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
  // dataSources,
  context,
  typeDefs,
  // resolvers,
  ApolloServer,
  // LaunchAPI,
  // UserAPI,
  // db,
  server,
};
