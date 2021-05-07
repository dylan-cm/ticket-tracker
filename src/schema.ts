import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date
  scalar Url
  scalar Email
  scalar Base64
  scalar Property
  scalar Value

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

  type UserFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    users: [User]!
  }

  type UserUpdateResponse {
    success: Boolean!
    message: String
    log: Event
    users: [User]
  }

  input UserInput {
    name: String
    email: Email
    role: Role
    project: ID
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

  type TicketFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    tickets: [Ticket]!
  }

  type TicketUpdateResponse {
    success: Boolean!
    message: String
    log: Event
    tickets: [Ticket]
  }

  input TicketInput {
    tag: String
    title: String
    description: String
    project: ID
    priority: Int
    type: TicketType
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

  type ProjectFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    projects: [Project]!
  }

  type ProjectUpdateResponse {
    success: Boolean!
    message: String
    log: Event
    projects: [Project]
  }

  input ProjectInput {
    title: String
    description: String
  } 

  type Comment {
    id: ID!
    author: User!
    comment: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type CommentFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    comments: [Comment]!
  }

  type CommentUpdateResponse {
    success: Boolean!
    message: String
    log: Event
    comments: [Comment]
  }

  type Event {
    id: ID!
    time: Date!
    property: String!
    change: String!
    user: User!
  }

  type EventFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    events: [Event]!
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

  type SprintFeed {
    pageSize: Int! # must be >= 1; default 20
    after: String # base64
    sprints: [Sprint]!
  }

  type SprintUpdateResponse {
    success: Boolean!
    message: String
    log: Event
    sprints: [Sprint]
  }

  input SprintInput {
    title: String
    description: String
    startDate: Date
    endDate: Date
    project: ID
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
    getUserTickets(userId: ID!, after: Base64, pageSize: Int): TicketFeed!
    getAllUsers(after: Base64, pageSize: Int): UserFeed!
    getUserLog(userId: ID!, after: Base64, pageSize: Int): EventFeed!
    # filterUsers

    getProject(projectId: ID!): Project
    getAllProjects(after: Base64, pageSize: Int): ProjectFeed!
    getProjectTeam(projectId: ID!, after: Base64, pageSize: Int): UserFeed!
    getProjectTickets(projectId: ID!, after: Base64, pageSize: Int): TicketFeed!
    getProjectSprints(projectId: ID!, after: Base64, pageSize: Int): SprintFeed!
    getProjectLog(projectId: ID!, after: Base64, pageSize: Int): EventFeed!

    # Commented out ticket filter. Will implement later.
    getTicket(ticketId: ID!): Ticket
    getAllTickets(after: Base64, pageSize: Int): TicketFeed!
    getTicketLog(ticketId: ID!, after: Base64, pageSize: Int): EventFeed!
    # filterTickets()

    getSprint(sprintId: ID!): Sprint
    getAllSprints(after: Base64, pageSize: Int): SprintFeed!
    getSprintLog(sprintId: ID!, after: Base64, pageSize: Int): EventFeed!
    # filterSprints
  }

  type Mutation {
    # if no userId provided, new user added with default values
    setUser(userId: ID, input: UserInput): UserUpdateResponse!
    deleteUser(userId: ID!): UserUpdateResponse!

    # if no ticketId provided, new ticket added with default values
    setTicket(ticketId: ID, input: TicketInput): TicketUpdateResponse! 
    deleteTicket(ticketId: ID!): TicketUpdateResponse!
    closeTicket(ticketId: ID!): TicketUpdateResponse!
    openTicket(ticketId: ID!): TicketUpdateResponse!
    assignTicket(ticketId: ID!, userId: ID!): TicketUpdateResponse!
    # if no commentId provided, new comment added
    setComment(ticketId: ID!, commentId: ID, comment: String!): TicketUpdateResponse!

    # if no projectId provided, new project added with default values
    setProject(projectId: ID, input: ProjectInput): ProjectUpdateResponse!
    deleteProject(projectId: ID!): ProjectUpdateResponse!
    addTeamMember(projectId: ID!, userId: ID!): ProjectUpdateResponse!
    removeTeamMember(projectId: ID!, userId: ID!): ProjectUpdateResponse!
    addManager(projectId: ID!, userId: ID!): ProjectUpdateResponse!
    removeManager(projectId: ID!, userId: ID!): ProjectUpdateResponse!
    # if no sprintId provided, new sprint added with default values
    setSprint(projectId: ID!, sprintId: ID, input: SprintInput): SprintUpdateResponse!
    deleteSprint(sprintId: ID!): SprintUpdateResponse!
  }
`

export default typeDefs