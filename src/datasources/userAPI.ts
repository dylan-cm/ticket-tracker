import { DataSource } from "apollo-datasource"
import { Comment, Event, Project, Role, Scalars, Sprint, Ticket, TicketType, User } from "../types/generated"

class UserAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getUser = async (userId: Scalars['ID']): Promise<User | undefined> => {
    if (!userId) throw new Error('getUser query requires userId')
    // if(user does not exist) return undefined

    let name = ""
    let email = ""
    let role: Role | null = null
    let lastLogin: Scalars['Date'] = ""
    let joined: Scalars['Date'] = ""
    let tickets: Ticket[] = []
    let createdTickets: Ticket[] = []
    let assignedTickets: Ticket[] = []
    let project: Project | null = null
    let resolved = 0
    let log: Event[] = []

    let user: User = {
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

  currentUser = async (): Promise<User | undefined> => {
    if(!this.context && !this.context.user) return undefined
    else return this.context.user
  } 

  getUserTickets = async (userId: Scalars['ID']): Promise<Ticket[]> => {
    if (!userId) throw new Error('getUser query requires userId')
    
    return []
  }

  getAllUsers = async (): Promise<User[]> => {
    return []
  }
  
  getUserLog = async (userId: Scalars['ID']): Promise<Event[]> => {
    if (!userId) throw new Error('getUser query requires userId')
    
    return []
  }

}

export default UserAPI