import { DataSource } from "apollo-datasource"
import * as type from "../types/generated"

class UserAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getUser = async ({userId}: type.QueryGetUserArgs): Promise<type.User | undefined> => {
    if (!userId) throw new Error('getUser query requires userId')
    // if(user does not exist) return undefined

    let name = ""
    let email = ""
    let role: type.Role | null = null
    let lastLogin: type.Scalars['Date'] = ""
    let joined: type.Scalars['Date'] = ""
    let tickets: type.Ticket[] = []
    let createdTickets: type.Ticket[] = []
    let assignedTickets: type.Ticket[] = []
    let project: type.Project | null = null
    let resolved = 0
    let log: type.Event[] = []

    let user: type.User = {
      id: userId,
      name,
      email,
      role,
      lastLogin,
      joined,
      tickets,
      createdTickets,
      assignedTickets,
      project,
      resolved,
      log,
    }

    return user
  }

  currentUser = async (): Promise<type.User | undefined> => {
    if(!this.context && !this.context.user) return undefined
    else return this.context.user
  } 

  getUserTickets = async ({userId, after, pageSize = 20}: type.QueryGetUserTicketsArgs): Promise<type.TicketFeed> => {
    if (!userId) throw new Error('getUserTickets query requires userId')
    
    let ticketFeed: type.TicketFeed = {
      after,
      pageSize: 0,
      tickets: []
    }

    return ticketFeed
  }

  getAllUsers = async ({after, pageSize = 20}: type.QueryGetAllUsersArgs): Promise<type.UserFeed> => {
    
    let userFeed: type.UserFeed = {
      after,
      pageSize: 0,
      users: []
    }

    return userFeed
  }
  
  getUserLog = async ({userId, after, pageSize = 20}: type.QueryGetUserLogArgs): Promise<type.EventFeed> => {
    if (!userId) throw new Error('getUserLog query requires userId')
    
    let eventFeed: type.EventFeed = {
      after,
      pageSize: 0,
      events: []
    }

    return eventFeed
  }

  setUser = async ({userId, input}: type.MutationSetUserArgs): Promise<type.UserUpdateResponse> => {
    let response: type.UserUpdateResponse = {
      success: false
    }

    return response
  }

  deleteUser = async ({userId}: type.MutationDeleteUserArgs): Promise<type.UserUpdateResponse> => {
    if (!userId) throw new Error('deleteUser query requires userId')
    
    let response: type.UserUpdateResponse = {
      success: false
    }

    return response
  }

}

export default UserAPI