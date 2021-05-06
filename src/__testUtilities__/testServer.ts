import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server'
import resolvers from '../resolvers/resolvers'
import typeDefs from '../schema'

export default function testServer(
  dataSources: any
): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  )
}
