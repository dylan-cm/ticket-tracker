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
      resolved
    }

    return user
  }

  currentUser = async (): Promise<User | undefined> => {
    if(!this.context && !this.context.user) return undefined
    else return this.context.user
  } 

  getUserTickets = async (): Promise<Ticket[]> => {
    return []
  }

  getAllUsers = async (): Promise<User[]> => {
    return []
  }

  getProject = async (projectId: Scalars['ID']): Promise<Project | undefined> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    // if(project does not exist) return undefined

    let title = ""
    let description = ""
    let tickets: Ticket[] = []
    let managers: User[] = []
    let team: User[] = []
    let createdAt: Scalars['Date'] = ""

    let user: Project = {
      id: projectId,
      title,
      description,
      tickets,
      managers,
      team,
      createdAt,
    }

    return user
  }

  getAllProjects = async (): Promise<Project[]> => {
    return []
  }
  
  getProjectTeam = async (): Promise<User[]> => {
    return []
  }
  
  getProjectTickets = async (): Promise<Ticket[]> => {
    return []
  }

  getProjectSprints = async (): Promise<Sprint[]> => {
    return []
  }

  getTicket = async (ticketId: Scalars['ID']): Promise<Ticket | undefined> => {
    if (!ticketId) throw new Error('getTicket query requires ticketId')
    // if(ticket does not exist) return undefined

    let tag: string = ""
    let title: string = ""
    let description: string = ""
    let assignedTo: User | undefined = await this.getUser("implement")
    let assignedBy: User | undefined= await this.getUser("implement")
    let assigned: boolean = false 
    let createdAt: Scalars['Date'] = ""
    let updatedAt: Scalars['Date'] = ""
    let deleted: boolean = false
    let open: boolean = false
    let closedAt: Scalars['Date'] = ""
    let priority: number = 0
    let type: TicketType = TicketType.Bug
    let comments: Comment[] = []
    let log: Event[] = []

    let author: User | undefined = await this.getUser("implement")
    let project: Project | undefined = await this.getProject("implement")

    if (!author || !project) throw new Error('ticket must have an assigned author and project')

    let ticket: Ticket = {
    id: ticketId,
    tag,
    title,
    description,
    author,
    project,
    assignedTo,
    assignedBy,
    assigned,
    createdAt,
    updatedAt,
    deleted,
    open,
    closedAt,
    priority,
    type,
    comments,
    log
    }

    return ticket
  }

  getAllTickets= async (): Promise<Ticket[]> => {
    return []
  }

  getTicketLog = async (): Promise<Event[]> => {
    return []
  }

  getSprint = async (sprintId: Scalars['ID']): Promise<Sprint> => {
    if (!sprintId) throw new Error('getSprint query requires sprintId')
    // if(ticket does not exist) return undefined

    let title: string = ""
    let description: string = ""
    let startDate: Scalars['Date'] = ""
    let endDate: Scalars['Date'] = ""
    let tickets: Ticket[] = []
    
    let project: Project | undefined = await this.getProject("implement")

    if (!project) throw new Error('sprint must have an assigned project')

    let sprint: Sprint = {
    id: sprintId,
    title,
    description,
    project,
    startDate,
    endDate,
    tickets,
    }

    return sprint
  }

  getAllSprints = async (): Promise<Sprint[]> => {
    return []
  }
}

export default UserAPI