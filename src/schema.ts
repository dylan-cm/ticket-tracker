import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date
  scalar Url
  scalar Email

  type User {
    id: ID!
    name: String!
    email: Email!
    role: Role

    lastLogin: Date!
    joined: Date!

    tickets: [Ticket]
    createdTickets: [Ticket]!
    assignedTickets: [Ticket]!
    project: Project
    resolved: Int!
    log: [Event]!
  }

  type Ticket {
    id: ID!
    tag: String!
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
    type: TicketType!

    # files: [Url]

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
    log: [Event]!
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

  type Sprint {
    id: ID!
    title: String!
    description: String!
    startDate: Date!
    endDate: Date!
    project: Project!
    tickets: [Ticket]!
    log: [Event]!
  }

  enum TicketType {
    BUG
    FEATURE
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

  type Query {
    currentUser: User
    getUser(userId: ID!): User
    getUserTickets(userId: ID!): [Ticket]!
    getAllUsers: [User]!
    getUserLog(ticketId: ID!): [Event]!
    # filterUsers

    getProject(projectId: ID!): Project
    getAllProjects: [Project]!
    getProjectTeam(projectId: ID!): [User]!
    getProjectTickets(projectId: ID!): [Ticket]!
    getProjectSprints(projectId: ID!): [Sprint]!
    getProjectLog(ticketId: ID!): [Event]!

    # Commented out ticket filter. Will implement later.
    getTicket(ticketId: ID!): Ticket
    getAllTickets: [Ticket]
    getTicketLog(ticketId: ID!): [Event]!
    # filterTickets(tag: String, ticketName: String, userName: String, projectName: String): [Ticket]!

    getSprint(sprintId: ID!): Sprint
    getAllSprints: [Sprint]!
    getSprintLog(ticketId: ID!): [Event]!
    # filterSprints
  }
`

export default typeDefs