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
  Base64: any;
  Date: any;
  Email: any;
  Property: any;
  Url: any;
  Value: any;
};


export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  author: User;
  comment: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type CommentFeed = {
  __typename?: 'CommentFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  comments: Array<Maybe<Comment>>;
};

export type CommentUpdateResponse = {
  __typename?: 'CommentUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  log?: Maybe<Event>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};



export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  time: Scalars['Date'];
  property: Scalars['String'];
  change: Scalars['String'];
  user: User;
};

export type EventFeed = {
  __typename?: 'EventFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  events: Array<Maybe<Event>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  setUser: UserUpdateResponse;
  deleteUser: UserUpdateResponse;
  setTicket: TicketUpdateResponse;
  deleteTicket: TicketUpdateResponse;
  closeTicket: TicketUpdateResponse;
  openTicket: TicketUpdateResponse;
  assignTicket: TicketUpdateResponse;
  setComment: TicketUpdateResponse;
  setProject: ProjectUpdateResponse;
  deleteProject: ProjectUpdateResponse;
  addTeamMember: ProjectUpdateResponse;
  removeTeamMember: ProjectUpdateResponse;
  addManager: ProjectUpdateResponse;
  removeManager: ProjectUpdateResponse;
  setSprint: SprintUpdateResponse;
  deleteSprint: SprintUpdateResponse;
};


export type MutationSetUserArgs = {
  userId?: Maybe<Scalars['ID']>;
  input?: Maybe<UserInput>;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationSetTicketArgs = {
  ticketId?: Maybe<Scalars['ID']>;
  input?: Maybe<TicketInput>;
};


export type MutationDeleteTicketArgs = {
  ticketId: Scalars['ID'];
};


export type MutationCloseTicketArgs = {
  ticketId: Scalars['ID'];
};


export type MutationOpenTicketArgs = {
  ticketId: Scalars['ID'];
};


export type MutationAssignTicketArgs = {
  ticketId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationSetCommentArgs = {
  ticketId: Scalars['ID'];
  commentId?: Maybe<Scalars['ID']>;
  comment: Scalars['String'];
};


export type MutationSetProjectArgs = {
  projectId?: Maybe<Scalars['ID']>;
  input?: Maybe<ProjectInput>;
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['ID'];
};


export type MutationAddTeamMemberArgs = {
  projectId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveTeamMemberArgs = {
  projectId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationAddManagerArgs = {
  projectId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveManagerArgs = {
  projectId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationSetSprintArgs = {
  projectId: Scalars['ID'];
  sprintId?: Maybe<Scalars['ID']>;
  input?: Maybe<SprintInput>;
};


export type MutationDeleteSprintArgs = {
  sprintId: Scalars['ID'];
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
  log: Array<Maybe<Event>>;
};

export type ProjectFeed = {
  __typename?: 'ProjectFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  projects: Array<Maybe<Project>>;
};

export type ProjectInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProjectUpdateResponse = {
  __typename?: 'ProjectUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  log?: Maybe<Event>;
  projects?: Maybe<Array<Maybe<Project>>>;
};


export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  getUser?: Maybe<User>;
  getUserTickets: TicketFeed;
  getAllUsers: UserFeed;
  getUserLog: EventFeed;
  getProject?: Maybe<Project>;
  getAllProjects: ProjectFeed;
  getProjectTeam: UserFeed;
  getProjectTickets: TicketFeed;
  getProjectSprints: SprintFeed;
  getProjectLog: EventFeed;
  getTicket?: Maybe<Ticket>;
  getAllTickets: TicketFeed;
  getTicketLog: EventFeed;
  getSprint?: Maybe<Sprint>;
  getAllSprints: SprintFeed;
  getSprintLog: EventFeed;
};


export type QueryGetUserArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserTicketsArgs = {
  userId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetUserLogArgs = {
  userId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryGetAllProjectsArgs = {
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectTeamArgs = {
  projectId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectTicketsArgs = {
  projectId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectSprintsArgs = {
  projectId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectLogArgs = {
  projectId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetTicketArgs = {
  ticketId: Scalars['ID'];
};


export type QueryGetAllTicketsArgs = {
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetTicketLogArgs = {
  ticketId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetSprintArgs = {
  sprintId: Scalars['ID'];
};


export type QueryGetAllSprintsArgs = {
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryGetSprintLogArgs = {
  sprintId: Scalars['ID'];
  after?: Maybe<Scalars['Base64']>;
  pageSize?: Maybe<Scalars['Int']>;
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
  project: Project;
  tickets: Array<Maybe<Ticket>>;
  log: Array<Maybe<Event>>;
};

export type SprintFeed = {
  __typename?: 'SprintFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  sprints: Array<Maybe<Sprint>>;
};

export type SprintInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  project?: Maybe<Scalars['ID']>;
};

export type SprintUpdateResponse = {
  __typename?: 'SprintUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  log?: Maybe<Event>;
  sprints?: Maybe<Array<Maybe<Sprint>>>;
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

export type TicketFeed = {
  __typename?: 'TicketFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  tickets: Array<Maybe<Ticket>>;
};

export type TicketInput = {
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<TicketType>;
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

export type TicketUpdateResponse = {
  __typename?: 'TicketUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  log?: Maybe<Event>;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['Email'];
  role?: Maybe<Role>;
  lastLogin: Scalars['Date'];
  joined: Scalars['Date'];
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  createdTickets: Array<Maybe<Ticket>>;
  assignedTickets: Array<Maybe<Ticket>>;
  project?: Maybe<Project>;
  resolved: Scalars['Int'];
  log: Array<Maybe<Event>>;
};

export type UserFeed = {
  __typename?: 'UserFeed';
  pageSize: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  users: Array<Maybe<User>>;
};

export type UserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  role?: Maybe<Role>;
  project?: Maybe<Scalars['ID']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  log?: Maybe<Event>;
  users?: Maybe<Array<Maybe<User>>>;
};

