export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Email: any;
  Url: any;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  author: User;
  comment: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};



export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  time: Scalars['Date'];
  property: Scalars['String'];
  change: Scalars['String'];
  user: User;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  managers: Array<Maybe<User>>;
  team: Array<Maybe<User>>;
  tickets: Array<Maybe<Ticket>>;
  createdAt: Scalars['Date'];
};

export type Query = {
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


export type QueryGetUserArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserTicketsArgs = {
  userId: Scalars['ID'];
};


export type QueryGetProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryGetProjectTeamArgs = {
  projectId: Scalars['ID'];
};


export type QueryGetProjectTicketsArgs = {
  projectId: Scalars['ID'];
};


export type QueryGetProjectSprintsArgs = {
  projectId: Scalars['ID'];
};


export type QueryGetTicketArgs = {
  ticketId: Scalars['ID'];
};


export type QueryGetTicketLogArgs = {
  ticketId: Scalars['ID'];
};


export type QueryGetSprintArgs = {
  sprintId: Scalars['ID'];
};

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Developer = 'DEVELOPER',
  Tester = 'TESTER'
}

export type Sprint = {
  __typename?: 'Sprint';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  project: Scalars['ID'];
  tickets: Array<Maybe<Ticket>>;
};

export type Ticket = {
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

export enum TicketProperty {
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

export enum TicketType {
  Bug = 'BUG',
  Feature = 'FEATURE'
}


export type User = {
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
