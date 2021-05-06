import gql from 'graphql-tag'

import testServer from '../../__testUtilities__/testServer'
import UserAPI from '../../datasources/userAPI'
import { User } from '../../types/generated'

describe('UserAPI', () => {
  let userSample: User = {
    id: "U123",
    name: "Dylan Cortez-Modell",
    email: "dylan@cortez-modell.com",
    role: null,
    lastLogin: "1620257982",
    joined: "1620257982",
    tickets: [],
    createdTickets: [],
    assignedTickets: [],
    project: null,
    resolved: 0
  }
  it('fetches a user', async () => {
    // We cannot stub a protected method,
    // so we declare the type as 'any'
    const userAPI: any = new UserAPI()

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = (): Promise<User> =>
      Promise.resolve(userSample)
    userAPI.get = jest.fn(getStub)

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ userAPI }))

    const GET_USER = gql`
      query GetUsers($getUserUserId: ID!) {
        getUser(userId: $getUserUserId){
          id
          name
          email
          role
          lastLogin
          joined
          tickets {
            id
          }
          createdTickets {
            id
          }
          project {
            id
          }
          resolved
          assignedTickets {
            id
          }
        }
      }

    `

    let res = await query({ query: GET_USER, variables: { "getUserUserId": "123" } })
    expect(res.errors).toBeUndefined()

    let user: User = res?.data?.getUser
    expect(typeof user).toBe(typeof userSample)
    // expect(user).toEqual(userSample)

    res = await query({ query: GET_USER, variables: { "getUserUserId": "" } })
    expect(res.errors).toBeTruthy()

    res = await query({ query: GET_USER, variables: { "getUserUserId": "does not exist" } })
    // expect(res.errors).toBeUndefined()
  })
})