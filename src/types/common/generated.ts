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

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Developer = 'DEVELOPER',
  Tester = 'TESTER'
}

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  prettyId: Scalars['String'];
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
  type: Scalars['String'];
  files?: Maybe<Array<Maybe<Scalars['Url']>>>;
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


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['Email'];
  role: Role;
  lastLogin: Scalars['Date'];
  joined: Scalars['Date'];
  createdTickets: Array<Maybe<Ticket>>;
  assignedTickets: Array<Maybe<Ticket>>;
  projects: Array<Maybe<Project>>;
  resolved: Scalars['Int'];
};
