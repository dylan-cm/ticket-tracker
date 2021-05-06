import { Ticket, User, Project, Event, Sprint } from "../generated"

interface CustomDataSourceType {
  userAPI: UserAPIProps
  ticketAPI: TicketAPIProps
  projectAPI: ProjectAPIProps
}

interface UserAPIProps {
  getUser: (userId: string) => Promise<User | undefined>
  currentUser: () => Promise<User | undefined>
  getUserTickets: (userId: string, pageSize: number, after: string) => Promise<Ticket[]>
  getAllUsers: (pageSize: number, after: string) => Promise<[User]>
  getUserLog: (userId: string, pageSize: number, after: string) => Promise<[Event]>
}

interface TicketAPIProps {
  getTicket: (ticketId: string) => Promise<Ticket | undefined>
  getAllTickets: (pageSize: number, after: string) => Promise<[Ticket]>
  getTicketLog: (ticketId: string, pageSize: number, after: string) => Promise<[Event]>
}

interface ProjectAPIProps {
  getProject: (projectId: string) => Promise<Project | undefined>
  getAllProjects: (pageSize: number, after: string) => Promise<[Project]>
  getProjectTeam: (projectId: string, pageSize: number, after: string) => Promise<[User]>
  getProjectTickets: (projectId: string, pageSize: number, after: string) => Promise<[Ticket]>
  getProjectSprints: (projectId: string, pageSize: number, after: string) => Promise<[Sprint]>
  getProjectLog: (projectId: string, pageSize: number, after: string) => Promise<[Event]>

  getSprint: (sprintId: string) => Promise<Sprint | undefined>
  getAllSprints: (pageSize: number, after: string) => Promise<[Sprint]>
  getSprintLog: (sprintId: string, pageSize: number, after: string) => Promise<[Event]>
}