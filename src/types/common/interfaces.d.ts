type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Email: any;
  Url: any;
};

interface Comment {
  __typename?: 'Comment';
  id: Scalars['ID'];
  author: User;
  comment: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};



interface Event {
  __typename?: 'Event';
  id: Scalars['ID'];
  time: Scalars['Date'];
  property: Scalars['String'];
  change: Scalars['String'];
  user: User;
};

interface Project {
  __typename?: 'Project';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  managers: Array<Maybe<User>>;
  team: Array<Maybe<User>>;
  tickets: Array<Maybe<Ticket>>;
  createdAt: Scalars['Date'];
};

interface Query {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  getUser?: Maybe<User>;
  getUserTickets: Array<Maybe<Ticket>>;
  getAllUsers: Array<Maybe<User>>;
  getProject?: Maybe<Project>;
  getAllProjects: Array<Maybe<Project>>;
  getProjectTeam: Array<Maybe<User>>;
  getProjectTickets: Array<Maybe<Ticket>>;
  getProjectSprints: Array<Maybe<Sprint>>;
  getTicket?: Maybe<Ticket>;
  getAllTickets?: Maybe<Array<Maybe<Ticket>>>;
  getTicketLog: Array<Maybe<Event>>;
  getSprint?: Maybe<Sprint>;
  getAllSprints: Array<Maybe<Sprint>>;
};


interface QueryGetUserArgs {
  userId: Scalars['ID'];
};


interface QueryGetUserTicketsArgs {
  userId: Scalars['ID'];
};


interface QueryGetProjectArgs {
  projectId: Scalars['ID'];
};


interface QueryGetProjectTeamArgs {
  projectId: Scalars['ID'];
};


interface QueryGetProjectTicketsArgs {
  projectId: Scalars['ID'];
};


interface QueryGetProjectSprintsArgs {
  projectId: Scalars['ID'];
};


interface QueryGetTicketArgs {
  ticketId: Scalars['ID'];
};


interface QueryGetTicketLogArgs {
  ticketId: Scalars['ID'];
};


interface QueryGetSprintArgs {
  sprintId: Scalars['ID'];
};

enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Developer = 'DEVELOPER',
  Tester = 'TESTER'
}

interface Sprint {
  __typename?: 'Sprint';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  project: Scalars['ID'];
  tickets: Array<Maybe<Ticket>>;
};

interface Ticket {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  tag: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author: User;
  project: Project;
  assignedTo?: Maybe<User>;
  assignedBy?: Maybe<User>;
  assigned: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  deleted: Scalars['Boolean'];
  open: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['Date']>;
  priority: Scalars['Int'];
  type: TicketType;
  comments?: Maybe<Array<Maybe<Comment>>>;
  log: Array<Maybe<Event>>;
};

enum TicketProperty {
  Authored = 'AUTHORED',
  AssignedTo = 'ASSIGNED_TO',
  Titled = 'TITLED',
  Description = 'DESCRIPTION',
  Open = 'OPEN',
  Priority = 'PRIORITY',
  Type = 'TYPE',
  Comment = 'COMMENT',
  Deleted = 'DELETED'
}

enum TicketType {
  Bug = 'BUG',
  Feature = 'FEATURE'
}


interface User {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['Email'];
  role: Role;
  lastLogin: Scalars['Date'];
  joined: Scalars['Date'];
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  createdTickets: Array<Maybe<Ticket>>;
  assignedTickets: Array<Maybe<Ticket>>;
  project?: Maybe<Project>;
  resolved: Scalars['Int'];
};
