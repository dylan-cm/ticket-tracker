import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date
  scalar Url
  scalar Email

  type User {
    id: ID!
    name: String!
    email: Email!
    role: Role!

    lastLogin: Date!
    joined: Date!

    createdTickets: [Ticket]!
    assignedTickets: [Ticket]!
    projects: [Project]!
    resolved: Int!
  }

  type Ticket {
    id: ID!
    prettyId: String!
    title: String!
    description: String
    author: User!
    project: Project!

    assignedTo: User
    assignedBy: User
    assigned: Boolean!

    createdAt: Date!
    updatedAt: Date!
    deleted: Boolean!

    open: Boolean!
    closedAt: Date

    priority: Int!
    type: String!

    files: [Url]

    comments: [Comment]
    log: [Event]!
  }

  type Project {
    id: ID!
    title: String!
    description: String
    managers: [User]!
    team: [User]!
    tickets: [Ticket]!
    createdAt: Date!
  }

  type Comment {
    id: ID!
    author: User!
    comment: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Event {
    id: ID!
    time: Date!
    property: String!
    change: String!
    user: User!
  }

  enum Role {
    ADMIN
    MANAGER
    DEVELOPER
    TESTER
  }

  enum TicketProperty {
    AUTHORED
    ASSIGNED_TO
    TITLED
    DESCRIPTION
    OPEN
    PRIORITY
    TYPE
    COMMENT
    DELETED
  }
`

export default typeDefs