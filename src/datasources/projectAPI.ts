import { DataSource } from "apollo-datasource"
import { Event, Project, Scalars, Sprint, Ticket, User } from "../types/generated"

class UserAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
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
    let log: Event[] = []

    let user: Project = {
      id: projectId,
      title,
      description,
      tickets,
      managers,
      team,
      createdAt,
      log,
    }

    return user
  }

  getAllProjects = async (): Promise<Project[]> => {
    return []
  }
  
  getProjectTeam = async (projectId: Scalars['ID']): Promise<User[]> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    
    return []
  }
  
  getProjectTickets = async (projectId: Scalars['ID']): Promise<Ticket[]> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    
    return []
  }

  getProjectSprints = async (projectId: Scalars['ID']): Promise<Sprint[]> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    
    return []
  }

  getProjectLog = async (projectId: Scalars['ID']): Promise<Event[]> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    
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
    let log: Event[] = []
    
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
    log,
    }

    return sprint
  }

  getAllSprints = async (): Promise<Sprint[]> => {
    return []
  }

  getSprintLog = async (sprintId: Scalars['ID']): Promise<Event[]> => {
    if (!sprintId) throw new Error('getSprint query requires sprintId')

    return []
  }
}

export default UserAPI