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

enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Developer = 'DEVELOPER',
  Tester = 'TESTER'
}

interface Ticket {
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


interface User  {
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
